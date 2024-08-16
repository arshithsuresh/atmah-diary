import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { DiaryPageState, DiaryPageFeature } from '../store/diary-feature';
import { Subject, takeUntil } from 'rxjs';
import * as DiaryPageActions from '../store/diary-feature/actions';
import { NO_RECORDER_COMPONENT } from '../errors/dev-errors';

@Component({
  template: '',
})
export abstract class KeypressRecordableComponent
  implements AfterViewInit, OnDestroy
{
  @HostListener('keypress', ['$event'])
  _onFocus() {
    this.onFocus();
  }

  @ViewChild('recorderInput') recorderElement!: ElementRef<HTMLInputElement>;

  @Input({ alias: 'recorder-id', required: true }) recorderId!: string;
  @Output('selected')
  $componentSelected: EventEmitter<void> = new EventEmitter();

  protected isSelectedComponent: boolean = false;
  private diaryStore = inject(Store<DiaryPageState>);
  private $destroyed: Subject<void> = new Subject();

  private currentSelectedComponent = this.diaryStore
    .select(DiaryPageFeature.selectCurrentComponent)
    .pipe(takeUntil(this.$destroyed));

  initialize() {
    if (!this.recorderElement) {
      throw NO_RECORDER_COMPONENT(this.recorderId);
    }
  }

  ngAfterViewInit(): void {
    console.log(`Recordable component : ${this.recorderId}`);
    this.initialize();

    this.diaryStore.dispatch(
      DiaryPageActions.RegisterRecordableComponent({
        componentId: this.recorderId,
        component: true,
      })
    );

    this.currentSelectedComponent.subscribe(selectedComponent => {
      this.isSelectedComponent = selectedComponent == this.recorderId;
      this.$componentSelected.emit();
    });
  }

  componentSelected() {
    if (this.isSelectedComponent) return;

    this.diaryStore.dispatch(
      DiaryPageActions.FocusRecordableComponent({
        componentId: this.recorderId,
      })
    );
  }

  ngOnDestroy(): void {
    this.$destroyed.next();
    this.$destroyed.complete();
  }

  abstract onFocus(): void;
}
