function calc() {
  // retreive and clean user input
  userInput = document.getElementById('input').value.replace(/\s+/g, '');
  console.log('ui: ' + userInput);
  // prevent code injection
  acceptedInput = /^(?![\+\-\*\/\%\^])(?!.*[\+\-\*\/\%\^]$)(?!.*?[\+\-\*\/\%\^][\+\-\*\/\%\^])(sqrt\(\d\)|\d|\+|\-|\*|\/|\%|\^|\(|\))+?$/gi
  if (!acceptedInput.test(userInput)) {
    document.getElementById('result').textContent = "ERROR";
    return false;
  }
  // pepare code for evaluation
  userInput = userInput.replace(/sqrt/ig, 'Math.sqrt');
  result = eval(userInput);
  console.log(result);
  document.getElementById('result').textContent = result;
  return false;
}

function parse_input(input) {
  // solve sqrt case first
  const sqrtArg = /^sqrt\((\d+)\)$/i;
  if (sqrtArg.exec(input)) {
    // not DRY proof!
    // regex ensure sqrt argument is positive
    return Math.sqrt(sqrtArg.exec(input)[1]);
  }
  return "Error";
}
