/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    // Type checking and attribute assignment
    this._name = this._checkString(name, 'name');
    this._length = this._checkNumber(length, 'length');
    this._students = this._checkArray(students, 'students');
  }

  // Getters for each attribute
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return [...this._students]; // Return a copy of the students array
  }

  // Setters for each attribute with type checking
  set name(newName) {
    this._name = this._checkString(newName, 'name');
  }

  set length(newLength) {
    this._length = this._checkNumber(newLength, 'length');
  }

  set students(newStudents) {
    this._students = this._checkArray(newStudents, 'students');
  }

  // Helper function to check if a value is a string and throw an error if not
  _checkString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Helper function to check if a value is a number and throw an error if not
  _checkNumber(value, attributeName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Helper function to check if a value is an array and throw an error if not
  _checkArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    return value;
  }
}
