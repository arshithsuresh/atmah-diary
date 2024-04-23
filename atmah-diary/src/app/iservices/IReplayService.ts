import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export abstract class IReplayService {
  abstract startReplay(): void;
  abstract play(): void;
  abstract pauseReplay(): void;
  abstract performTyping(): void;
  abstract setControl(control: FormControl): void;
}
