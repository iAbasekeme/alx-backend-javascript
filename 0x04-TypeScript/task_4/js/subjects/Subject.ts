namespace Subjects {
  export class Subject {
    private teacher: Subjects.Teacher | undefined;

    setTeacher(teacher: Subjects.Teacher) {
      this.teacher = teacher;
    }
  }
}