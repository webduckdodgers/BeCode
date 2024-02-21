// variableScope.js
let globalVar;

// Function 1
function localScopeExample() {
  // Your code here
  let localVar;
  return localVar;
}

// Function 2
function globalScopeExample() {
  // Your code here
  return globalVar;
}

// Function 3
function blockScopeExample() {
  // Your code here
  {
    let blockVar = 20;
    return blockVar;
  }
}

module.exports = {
  localScopeExample,
  globalScopeExample,
  blockScopeExample,
  globalVar,
};
