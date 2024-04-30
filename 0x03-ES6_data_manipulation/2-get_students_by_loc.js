export default function getStudentsByLocation(student, city) {
  const location = student.filter((i) => i.location === city);
  return location;
}
