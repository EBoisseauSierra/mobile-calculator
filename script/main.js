function calc() {
  // retreive and clean user input
  userInput = document.getElementById('input').value.replace(/\s+/g, '');
  // prevent code injection
  acceptedInput = /^(?![\+\-\*\/\%\^])(?!.*[\+\-\*\/\%\^]$)(?!.*?[\+\-\*\/\%\^][\+\-\*\/\%\^])(sqrt\(\d+\)|\d|\+|\-|\*|\/|\%|\^|\(|\))+?$/gi
  if (!acceptedInput.test(userInput)) {
    document.getElementById('result').textContent = "Error: uncorrect syntax.";
    return false;
  }
  // pepare code for evaluation
  userInput = userInput.replace(/sqrt/ig, 'Math.sqrt');
  userInput = userInput.replace(/\^/ig, '**');
  // compute and display result
  result = eval(userInput);
  document.getElementById('result').textContent = result;
  // prevent page to refresh (and to reset #result.textContent)
  return false;
}
