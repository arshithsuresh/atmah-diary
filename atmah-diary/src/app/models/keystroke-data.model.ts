export interface Keystroke {
  k: string;
  w: number;
}

export interface DiaryPageData {
  keyData: Keystroke[];
  component: null;
  pageIndex: number;
}

export interface DiaryData {
  recordedData: Array<DiaryPageData>;
}
