export default function updateUniqueItems(mappa) {
  mappa.forEach((value, key) => {
    if (value === 1) mappa.set(key, 100);
  });
  return mappa;
}
