export default function getListStudentIds(args) {
  if (!(Array.isArray(args))) {
    return [];
  }
  const arrs = args.map((id) => id.id);
  return arrs;
}
