interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Maronni',
  lastName: 'Ntui',
  age: 25,
  location: 'Habibi'
}

const student2: Student = {
  firstName: 'Abas',
  lastName: 'pr',
  age: 9,
  location: 'Atlanta'
}

const arr: any[] = [student1, student2];

function renderStudents() {
  const tableBody = document.getElementById("tableBody");
  if (!tableBody) return; // Handle potential missing element

  arr.forEach((student) => {
    const tableRow = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    tableRow.appendChild(firstNameCell);
    tableRow.appendChild(locationCell);

    tableBody.appendChild(tableRow);
  });
}