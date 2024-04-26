export default function iterateThroughObject(reportWithIterator) {
  const store = [];
  for (const employee of reportWithIterator) {
    store.push(employee);
  }
  return store.join(' | ');
}
