import { randomIntFromInterval } from '../utils/random';

export abstract class ISoundsService<T> {
  protected keyboardSoundMap: Map<T, string[]> = new Map();

  private loadedSounds: Map<T, Array<HTMLAudioElement>> = new Map();

  loadAllSounds() {
    this.keyboardSoundMap.forEach((sounds, key) => {
      sounds.forEach(soundSrc => {
        const currentSoundsForKey = this.loadedSounds.get(key);
        const audio = new Audio(soundSrc);
        audio.load();
        if (currentSoundsForKey) {
          this.loadedSounds.get(key)!.push(audio);
        } else {
          this.loadedSounds.set(key, [audio]);
        }
      });
    });
  }

  addSound(key: T, src: string) {
    const keySrc = this.keyboardSoundMap.get(key);

    if (keySrc) {
      keySrc.push(src);
    } else {
      this.keyboardSoundMap.set(key, [src]);
    }
  }

  playSound(key: T, random: boolean = true) {
    if (!this.keyboardSoundMap.has(key)) {
      console.error('NO SOUND FOUND FOR ', key);
      return;
    }

    const soundsForKey = this.loadedSounds.get(key);
    const randomSound = soundsForKey!.at(
      randomIntFromInterval(0, soundsForKey!.length - 1)
    );
    if (!randomSound) console.warn('Sound random errored');

    randomSound?.play();
  }
}
