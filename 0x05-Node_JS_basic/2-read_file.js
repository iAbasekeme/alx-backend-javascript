const fs = require("fs");
module.exports = function countStudents(path) {
  try {
    const data = fs.readFileSync(path, { encoding: "utf-8" });
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    if (lines.length <= 1) {
      console.log(`Number of students: 0`);
    }
    const students = lines.slice(1);
    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach(line => {
      const [firstName, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    });

    Object.entries(fields).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch {
    console.log("Cannot load the database");
  }
};
