import { Type } from '@angular/core';
import { KeypressRecordableComponent } from '../../base/RecordableComponent.base';
import { DiaryPageData } from '../../models/keystroke-data.model';

export interface DiaryPageState {
  registeredComponents: Map<string, boolean>;
  currentComponent: string;
  pageData: DiaryPageData;
  loading: boolean;
}
