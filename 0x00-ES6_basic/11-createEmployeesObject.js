export default function createEmployeesObject(departmentName, employees) {
  const o = {};
  o[departmentName] = employees;
  return o;
}
