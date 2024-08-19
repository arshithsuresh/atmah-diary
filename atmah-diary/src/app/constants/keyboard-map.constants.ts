import { AvailableKeyCodes, KeyCode } from '../enum/keyboard-key.enum';

export const SpecialKeyMap: Map<KeyCode, string> = new Map([
  [KeyCode.Backspace, '\u0008'], // Backspace
  [KeyCode.Tab, '   '], // Tab
  [KeyCode.Enter, '\u000D'], // Enter
  [KeyCode.IntlBackslash, '\\'], // For non-US keyboard layouts
]);

export const KeyCodeMapping: Map<AvailableKeyCodes | KeyCode, string> = new Map(
  [
    [AvailableKeyCodes.Backspace, '\b'], // Backspace
    [AvailableKeyCodes.Enter, '\u000D'], // Enter
    [AvailableKeyCodes.Escape, 'q'], // Escape
    [AvailableKeyCodes.Space, ' '], // Space
    [AvailableKeyCodes.Digit0, '0'],
    [AvailableKeyCodes.Digit1, '1'],
    [AvailableKeyCodes.Digit2, '2'],
    [AvailableKeyCodes.Digit3, '3'],
    [AvailableKeyCodes.Digit4, '4'],
    [AvailableKeyCodes.Digit5, '5'],
    [AvailableKeyCodes.Digit6, '6'],
    [AvailableKeyCodes.Digit7, '7'],
    [AvailableKeyCodes.Digit8, '8'],
    [AvailableKeyCodes.Digit9, '9'],
    [AvailableKeyCodes.KeyA, 'a'],
    [AvailableKeyCodes.KeyB, 'b'],
    [AvailableKeyCodes.KeyC, 'c'],
    [AvailableKeyCodes.KeyD, 'd'],
    [AvailableKeyCodes.KeyE, 'e'],
    [AvailableKeyCodes.KeyF, 'f'],
    [AvailableKeyCodes.KeyG, 'g'],
    [AvailableKeyCodes.KeyH, 'h'],
    [AvailableKeyCodes.KeyI, 'i'],
    [AvailableKeyCodes.KeyJ, 'j'],
    [AvailableKeyCodes.KeyK, 'k'],
    [AvailableKeyCodes.KeyL, 'l'],
    [AvailableKeyCodes.KeyM, 'm'],
    [AvailableKeyCodes.KeyN, 'n'],
    [AvailableKeyCodes.KeyO, 'o'],
    [AvailableKeyCodes.KeyP, 'p'],
    [AvailableKeyCodes.KeyQ, 'q'],
    [AvailableKeyCodes.KeyR, 'r'],
    [AvailableKeyCodes.KeyS, 's'],
    [AvailableKeyCodes.KeyT, 't'],
    [AvailableKeyCodes.KeyU, 'u'],
    [AvailableKeyCodes.KeyV, 'v'],
    [AvailableKeyCodes.KeyW, 'w'],
    [AvailableKeyCodes.KeyX, 'x'],
    [AvailableKeyCodes.KeyY, 'y'],
    [AvailableKeyCodes.KeyZ, 'z'],

    [AvailableKeyCodes.Numpad0, '0'],
    [AvailableKeyCodes.Numpad1, '1'],
    [AvailableKeyCodes.Numpad2, '2'],
    [AvailableKeyCodes.Numpad3, '3'],
    [AvailableKeyCodes.Numpad4, '4'],
    [AvailableKeyCodes.Numpad5, '5'],
    [AvailableKeyCodes.Numpad6, '6'],
    [AvailableKeyCodes.Numpad7, '7'],
    [AvailableKeyCodes.Numpad8, '8'],
    [AvailableKeyCodes.Numpad9, '9'],

    [AvailableKeyCodes.NumpadMultiply, '*'], // Asterisk (*) on numeric keypad
    [AvailableKeyCodes.NumpadAdd, '+'], // Plus sign (+) on numeric keypad
    [AvailableKeyCodes.NumpadSubtract, '-'], // Minus sign (-) on numeric keypad
    [AvailableKeyCodes.NumpadDecimal, '.'], // Decimal point (.) on numeric keypad
    [AvailableKeyCodes.NumpadDivide, '/'], // Forward slash (/) on numeric keypad

    [AvailableKeyCodes.Semicolon, ';'],
    [AvailableKeyCodes.Equal, '='],
    [AvailableKeyCodes.Comma, ','],
    [AvailableKeyCodes.Minus, '-'],
    [AvailableKeyCodes.Period, '.'],
    [AvailableKeyCodes.Slash, '/'],
    [AvailableKeyCodes.Backquote, '`'],
    [AvailableKeyCodes.BracketLeft, '['],
    [AvailableKeyCodes.Backslash, '\\'],
    [AvailableKeyCodes.BracketRight, ']'],
    [AvailableKeyCodes.Quote, "'"],
  ]
);

export const AllAvailableKeyCodesMapping: Record<KeyCode, string> = {
  [KeyCode.Backspace]: '\b', // Backspace
  [KeyCode.Tab]: '\t', // Tab
  [KeyCode.Enter]: 'e', // Enter
  [KeyCode.ShiftLeft]: '', // Left Shift
  [KeyCode.ShiftRight]: '', // Right Shift
  [KeyCode.ControlLeft]: '', // Left Control
  [KeyCode.ControlRight]: '', // Right Control
  [KeyCode.AltLeft]: '', // Left Alt
  [KeyCode.AltRight]: '', // Right Alt
  [KeyCode.CapsLock]: '', // Caps Lock
  [KeyCode.Escape]: 'q', // Escape
  [KeyCode.Space]: ' ', // Space
  [KeyCode.PageUp]: '', // Page Up
  [KeyCode.PageDown]: '', // Page Down
  [KeyCode.End]: '', // End
  [KeyCode.Home]: '', // Home
  [KeyCode.ArrowLeft]: '', // Left Arrow
  [KeyCode.ArrowUp]: '', // Up Arrow
  [KeyCode.ArrowRight]: '', // Right Arrow
  [KeyCode.ArrowDown]: '', // Down Arrow
  [KeyCode.Insert]: '', // Insert
  [KeyCode.Delete]: '', // Delete
  [KeyCode.Digit0]: '0',
  [KeyCode.Digit1]: '1',
  [KeyCode.Digit2]: '2',
  [KeyCode.Digit3]: '3',
  [KeyCode.Digit4]: '4',
  [KeyCode.Digit5]: '5',
  [KeyCode.Digit6]: '6',
  [KeyCode.Digit7]: '7',
  [KeyCode.Digit8]: '8',
  [KeyCode.Digit9]: '9',
  [KeyCode.KeyA]: 'a',
  [KeyCode.KeyB]: 'b',
  [KeyCode.KeyC]: 'c',
  [KeyCode.KeyD]: 'd',
  [KeyCode.KeyE]: 'e',
  [KeyCode.KeyF]: 'f',
  [KeyCode.KeyG]: 'g',
  [KeyCode.KeyH]: 'h',
  [KeyCode.KeyI]: 'i',
  [KeyCode.KeyJ]: 'j',
  [KeyCode.KeyK]: 'k',
  [KeyCode.KeyL]: 'l',
  [KeyCode.KeyM]: 'm',
  [KeyCode.KeyN]: 'n',
  [KeyCode.KeyO]: 'o',
  [KeyCode.KeyP]: 'p',
  [KeyCode.KeyQ]: 'q',
  [KeyCode.KeyR]: 'r',
  [KeyCode.KeyS]: 's',
  [KeyCode.KeyT]: 't',
  [KeyCode.KeyU]: 'u',
  [KeyCode.KeyV]: 'v',
  [KeyCode.KeyW]: 'w',
  [KeyCode.KeyX]: 'x',
  [KeyCode.KeyY]: 'y',
  [KeyCode.KeyZ]: 'z',
  [KeyCode.Numpad0]: '0',
  [KeyCode.Numpad1]: '1',
  [KeyCode.Numpad2]: '2',
  [KeyCode.Numpad3]: '3',
  [KeyCode.Numpad4]: '4',
  [KeyCode.Numpad5]: '5',
  [KeyCode.Numpad6]: '6',
  [KeyCode.Numpad7]: '7',
  [KeyCode.Numpad8]: '8',
  [KeyCode.Numpad9]: '9',
  [KeyCode.NumpadMultiply]: '*', // Asterisk (*) on numeric keypad
  [KeyCode.NumpadAdd]: '+', // Plus sign (+) on numeric keypad
  [KeyCode.NumpadSubtract]: '-', // Minus sign (-) on numeric keypad
  [KeyCode.NumpadDecimal]: '.', // Decimal point (.) on numeric keypad
  [KeyCode.NumpadDivide]: '/', // Forward slash (/) on numeric keypad
  [KeyCode.F1]: '', // F1
  [KeyCode.F2]: '', // F2
  [KeyCode.F3]: '', // F3
  [KeyCode.F4]: '', // F4
  [KeyCode.F5]: '', // F5
  [KeyCode.F6]: '', // F6
  [KeyCode.F7]: '', // F7
  [KeyCode.F8]: '', // F8
  [KeyCode.F9]: '', // F9
  [KeyCode.F10]: '', // F10
  [KeyCode.F11]: '', // F11
  [KeyCode.F12]: '', // F12
  [KeyCode.NumLock]: '', // Num Lock
  [KeyCode.ScrollLock]: '', // Scroll Lock
  [KeyCode.Semicolon]: ';',
  [KeyCode.Equal]: '=',
  [KeyCode.Comma]: ',',
  [KeyCode.Minus]: '-',
  [KeyCode.Period]: '.',
  [KeyCode.Slash]: '/',
  [KeyCode.Backquote]: '`',
  [KeyCode.BracketLeft]: '[',
  [KeyCode.Backslash]: '\\',
  [KeyCode.BracketRight]: ']',
  [KeyCode.Quote]: "'",
  [KeyCode.IntlBackslash]: '\\', // For non-US keyboard layouts
  [KeyCode.ContextMenu]: '', // Context Menu key (typically appears between the right Windows and Ctrl keys)
};
