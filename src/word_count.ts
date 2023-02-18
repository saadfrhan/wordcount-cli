export async function countWords(_: string[], input = "") {
  const wordsLen = input ? input.trim().split(' ').filter((elem) => elem !== ' ').length : 0;
  const charsLen = input.replace(/\s+/g, '').length;
  return new Promise(res => res([`Words: ${wordsLen} Characters: ${charsLen}`]));
}