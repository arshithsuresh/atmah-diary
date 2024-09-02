import { DiaryPageData } from '../../models/keystroke-data.model';

export interface DiaryPageState {
  registeredComponents: Map<string, boolean>;
  focusedComponent: string;
  activeComponent: string;
  pageData: DiaryPageData;
  currentRecordEventIndex: number;
  loading: boolean;
}
