export interface Keystroke {
  k: string;
  w: number;
}

export interface DiaryPageData {
  pageEvents: RecordEvent[];
  pageIndex: number;
}

export interface RecordEvent {
  keyData: Keystroke[];
  componentId: string;
}

export interface DiaryData {
  recordedData: Array<DiaryPageData>;
}
