export default function getListStudentIds(obji) {
  if (!Array.isArray(obji)) return [];
  const ids = obji.map((item) => item.id);
  return ids;
}
