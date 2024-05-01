interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  readonly fullTimeEmployee: boolean;
  readonly yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(pt:printTeacherFunction) {
  return `${pt.firstName.slice(0,1)}. ${pt.lastName}`
}

interface studentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(px: printTeacherFunction) {
    this.firstName = px.firstName
    this.lastName = px.lastName
  }

  workOnHomework(): string {
    return `Currently working`
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}
