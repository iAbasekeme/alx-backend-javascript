export default function getStudentIdsSum(ids) {
  const result = ids.reduce((accumulator, ids) => accumulator + ids.id, 0);
  return result;
}
