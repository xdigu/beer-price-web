export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getPrefix = (index: number) => Math.trunc(index / 26);

const getCharIndex = (index: number, prefix: number) => {
  if (prefix === 0) return index;

  if (prefix * 26 - index < 0) return index - prefix * 26;

  return prefix * 26 - index;
};

export const getAphabetLetterByIndex = (index: number) => {
  const prefix = getPrefix(index);
  const charIndex = getCharIndex(index, prefix);

  return `${prefix !== 0 ? prefix : ""}${alphabet.charAt(charIndex)}`;
};
