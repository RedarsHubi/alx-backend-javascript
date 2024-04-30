export default function cleanSet(set, startString) {
  const seto = new Set();
  if (startString === '') {
    return '';
  }
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      seto.add(value.slice(startString.length));
    }
  });
  return Array.from(seto).join('-');
}
