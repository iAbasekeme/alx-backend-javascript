interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInteface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks (): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInteface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher()
  } else {
    return new Director()
  }
}

interface Employee {
    role: string;
}

interface Director extends Employee {
    role: "Director";
    workDirectorTasks(): void;
}

interface Teacher extends Employee {
    role: "Teacher";
    workTeacherTasks(): void;
}

function isDirector(employee: Employee): employee is Director {
  return employee.role === 'Director';
}

function executeWork(employee: Director | Teacher) {
  if (employee && employee.role === 'Director') {
    employee.workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks()
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  }
}
