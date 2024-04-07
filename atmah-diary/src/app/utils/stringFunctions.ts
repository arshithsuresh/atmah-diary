export function isCharacter(character: string) {
  return (
    character &&
    character.length == 1 &&
    character.charCodeAt(0) >= 97 &&
    character.charCodeAt(0) <= 122
  );
}
