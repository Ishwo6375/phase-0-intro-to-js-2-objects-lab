// Write your solution in this file!
let employee = {
    name: "",
    streetAddress: ""
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
 let employee2 = {...employee};
 employee2[key] = value;
 return employee2;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let employee2 = {...employee};
    delete employee2[key];
    return employee2;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let employee2 = {...employee};
    delete employee[key] ;
    delete employee2[key];
    return employee;
}
