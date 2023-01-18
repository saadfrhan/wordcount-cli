export async function countWords(_: string[], input = "") {
  const wordsLen = input.split(' ')[0] === '' ? 0 : input.trim().split(' ').length;
  const charsLen = input.replace(/\s+/g, '').length;
  return new Promise(res => res([`Words: ${wordsLen} Characters: ${charsLen}`]));
}