import { Injectable } from '@angular/core';
import { ISoundsService } from '../../../iservices/ISoundsService';
import { KeyboardSounds } from '../../../enum/key-sound.enum';

@Injectable({
  providedIn: 'root',
})
export class KeyboardSoundsService extends ISoundsService<KeyboardSounds> {
  constructor() {
    super();
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key1.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key2.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key3.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key8.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key4.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key5.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key6.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key7.mp3');
    this.addSound(KeyboardSounds.NORMAL_KEY, 'assets/sounds/keyboard/key9.mp3');
    this.addSound(
      KeyboardSounds.NORMAL_KEY,
      'assets/sounds/keyboard/key10.mp3'
    );
    this.addSound(
      KeyboardSounds.NORMAL_KEY,
      'assets/sounds/keyboard/key11.mp3'
    );
    this.addSound(
      KeyboardSounds.NORMAL_KEY,
      'assets/sounds/keyboard/key12.mp3'
    );

    this.addSound(KeyboardSounds.ENTER_KEY, 'assets/sounds/keyboard/enter.mp3');
    this.addSound(
      KeyboardSounds.BACKSPACE_KEY,
      'assets/sounds/keyboard/backspace.mp3'
    );
  }
}
