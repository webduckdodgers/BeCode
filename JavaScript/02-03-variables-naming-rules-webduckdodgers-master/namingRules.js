// namingRules.js

// Function 1
function validVariableName() {
  // Your code here
  let name = "Marc";
  return name;
}

// Function 2
function invalidVariableName() {
  // Your code here
  let n4me = "Marc";
  return n4me;
}

// Function 3
function camelCaseVariableName() {
  // Your code here
  let firstName = "Marc";
  return firstName;
}

// Function 4
function snake_caseVariableName() {
  // Your code here
  let snake_case_variable_name = "Marc";
  return snake_case_variable_name;
}

// Function 5
function PascalCaseVariableName() {
  // Your code here
  let FisrtName = "Marc";
  return FisrtName;
}

module.exports = {
  validVariableName,
  invalidVariableName,
  camelCaseVariableName,
  snake_caseVariableName,
  PascalCaseVariableName,
};
