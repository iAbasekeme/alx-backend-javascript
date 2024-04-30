/* eslint-disable implicit-arrow-linebreak */
export default function updateStudentGradeByCity(arrs, city, grades) {
  return arrs.filter((args) =>
    args.location === city).map((student) => {
    const newGrade = grades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
