import {
  AfterViewInit,
  Component,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { DiaryPageState, DiaryPageFeature } from '../store/diary-feature';
import { Subject, takeUntil } from 'rxjs';
import * as DiaryPageActions from '../store/diary-feature/actions';

@Component({
  template: '',
})
export abstract class RecordableComponent implements AfterViewInit, OnDestroy {
  @HostListener('click', ['$event'])
  _onFocus() {
    this.onFocus();
  }

  @Input({ alias: 'recorder-id', required: true }) recorderId!: string;
  @Output('selected')
  $componentSelected: EventEmitter<void> = new EventEmitter();

  protected isSelectedComponent: boolean = false;
  private diaryStore = inject(Store<DiaryPageState>);
  private $destroyed: Subject<void> = new Subject();

  private currentSelectedComponent = this.diaryStore
    .select(DiaryPageFeature.selectCurrentComponent)
    .pipe(takeUntil(this.$destroyed));

  ngAfterViewInit(): void {
    console.log(`Recordable component : ${this.recorderId}`);
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
