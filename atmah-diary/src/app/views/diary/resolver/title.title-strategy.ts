import { Injectable } from '@angular/core';
import { DiaryViewModule } from '../diary-view.module';
import {
  ActivatedRoute,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable()
export class DiaryViewTitleResolver extends TitleStrategy {
  titleMap: Map<string, string> = new Map([
    ['edit', 'Atmah | Editing '],
    ['view', 'Atmah | Viewing '],
  ]);

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    this.title.setTitle(`My App - ${title}`);
  }
}
