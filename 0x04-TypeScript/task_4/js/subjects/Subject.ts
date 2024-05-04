namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher | undefined;

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}