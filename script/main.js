function calc() {
  // retreive user input
  userInput = document.getElementById('input');
  // parse it without whitespace
  console.log(`user input: ${userInput.value.replace(/\s+/g, '')}`);
  result = parse_input(userInput.value.replace(/\s+/g, ''));
  document.getElementById('result').textContent = result;
  return false;
}

function parse_input(input) {
  // solve sqrt case first
  const sqrtArg = /^sqrt\(([0-9]+)\)$/i;
  if (sqrtArg.exec(input)) {
    // not DRY proof!
    // regex ensure sqrt argument is positive
    return Math.sqrt(sqrtArg.exec(input)[1]);
  }
  return "Error";
}
