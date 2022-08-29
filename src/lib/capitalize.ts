export function capitalize(str: string): string {
  const replaced = str.replace(/^\w/, str[0].toUpperCase());
  const words = replaced.split(/(\s.*)/);
  return words
    .map((word) => {
      const match = word.match(/\w/);
      if (match?.index !== undefined) {
        return word.replace(/\w/, word[match.index].toUpperCase());
      } else {
        return word;
      }
    })
    .join('');
}
