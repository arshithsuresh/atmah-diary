import { AvailableKeyCodes } from '../enum/keyboard-key.enum';

export interface KeyboardInput {
  key: AvailableKeyCodes;
  type: string;

  ctrl?: boolean;
  shift?: boolean;
  alt?: boolean;
}
