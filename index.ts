export function reversedWords(text: string): string {
  return text.split(/\s+/).reverse().join(' ');
}

console.log(reversedWords('one two three'));
