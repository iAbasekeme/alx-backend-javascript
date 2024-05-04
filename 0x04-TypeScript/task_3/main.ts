/// <reference path='./js/crud.d.ts' />

import { RowID, RowElement } from './interface';
import * as CRUD from './js/crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = CRUD.insertRow(row);
console.log("New row ID:", newRowID);

row.age = 23;
const updatedRow = CRUD.updateRow(newRowID, row);
console.log("Updated row:", updatedRow);

CRUD.deleteRow(newRowID);
console.log("Row deleted.");
