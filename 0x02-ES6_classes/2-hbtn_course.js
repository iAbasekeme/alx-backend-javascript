/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, students, length) {
    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);

    this._name = name;
    this._students = students;
    this._length = length;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    // Return a copy of the students array to prevent modification
    return this._students.slice();
  }

  // Setters
  set name(newName) {
    this._validateName(newName);
    this._name = newName;
  }

  set length(newLength) {
    this._validateLength(newLength);
    this._length = newLength;
  }

  set students(newStudents) {
    this._validateStudents(newStudents);
    this._students = newStudents;
  }

  // Validation functions (private)
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number' || Number.isNaN(length)) {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
