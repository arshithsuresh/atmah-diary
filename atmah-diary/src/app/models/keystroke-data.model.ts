export interface Keystroke {
  k: string;
  w: number;
}

export interface SingleLineData {
  keyData: Keystroke[];
  nextData: any;
}
