import { cpp, java, react, cTeacher } from "./Subjects";

const cppSubject = new Subjects.Cpp();
cppSubject.setTeacher(cTeacher);

console.log("C++:");
console.log(cppSubject.getRequirements());
console.log(cppSubject.getAvailableTeacher());

const javaSubject = new Subjects.Java();
javaSubject.setTeacher(cTeacher);

console.log("\nJava:");
console.log(javaSubject.getRequirements());
console.log(javaSubject.getAvailableTeacher());

const reactSubject = new Subjects.React();
reactSubject.setTeacher(cTeacher);

console.log("\nReact:");
console.log(reactSubject.getRequirements());
console.log(reactSubject.getAvailableTeacher());