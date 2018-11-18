"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //  weak
var
ToDoListUpdateMarkAll = async function ToDoListUpdateMarkAll(objectManager, ToDo_CompleteNew) {
  const arr = await objectManager.getObjectList_async('ToDo', {});

  const arr_filtered = arr.filter(a_ToDo => a_ToDo.ToDo_Complete !== ToDo_CompleteNew);

  const arrPromiseToUpdate = arr_filtered.map((a_ToDo) =>
  objectManager.update('ToDo', {
    id: a_ToDo.id,
    ToDo_Complete: ToDo_CompleteNew }));



  const arr_local_ids_Changed_ToDos = arr_filtered.map(a_ToDo => a_ToDo.id);

  await Promise.all(arrPromiseToUpdate);

  return arr_local_ids_Changed_ToDos;
};exports.default = ToDoListUpdateMarkAll;
//# sourceMappingURL=ToDoListUpdateMarkAll.js.map