const compute = function processUserInputAndDisplayResult(){
  // retreive and clean user input
  userInput = document.getElementById('input').value.replace(/\s+/g, '');
  // prevent code injection
  acceptedInput = /^(?![\+\*\/\%\^])(?!.*[\+\-\*\/\%\^]$)(?!.*?[\+\-\*\/\%\^][\+\-\*\/\%\^])(sqrt\(\d+\)|\d|\+|\-|\*|\/|\%|\^|\(|\))+?$/gi
  if (!acceptedInput.test(userInput)) {
    document.getElementById('result').textContent = "Error: uncorrect syntax.";
    return 1;
  }
  // display result
  document.getElementById('result').textContent = calc(userInput);
  return 0
}

const calc = function evaluateUserInput() {
  // pepare code for evaluation
  userInput = userInput.replace(/sqrt/ig, 'Math.sqrt');
  userInput = userInput.replace(/\^/ig, '**');
  // compute and display result
  return eval(userInput);
}
