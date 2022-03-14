document.addEventListener('DOMContentLoaded', (e) => {
  const resultScreen = document.getElementById('res');

  const displayOnScreen = (e) => {
    resultScreen.innerHTML = resultScreen.innerHTML + e.target.innerText;
  };

  const clearScreen = () => {
    resultScreen.innerHTML = '';
  };

  const calculateResult = () => {
    const strOnScreen = resultScreen.innerHTML;
    const numReg = /\d+/g;
    const signReg = /[*+\/-]+/g;

    let numArr = strOnScreen.match(numReg);

    const operator = strOnScreen.match(signReg)[0];

    if (numArr.length === 2) {
      let num1 = parseInt(numArr[0], 2);
      let num2 = parseInt(numArr[1], 2);
      let result = null;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = Math.floor(num1 / num2);

          break;
        default:
          result = null;
      }

      result = result.toString(2);

      clearScreen();
      resultScreen.innerHTML = result;
      //   console.log(result.toString(2));
    }
  };

  // Adding event listners on the buttons
  document.getElementById('btn0').onclick = displayOnScreen;
  document.getElementById('btn1').onclick = displayOnScreen;
  document.getElementById('btnClr').onclick = clearScreen;
  document.getElementById('btnSum').onclick = displayOnScreen;
  document.getElementById('btnSub').onclick = displayOnScreen;
  document.getElementById('btnMul').onclick = displayOnScreen;
  document.getElementById('btnDiv').onclick = displayOnScreen;
  document.getElementById('btnEql').onclick = calculateResult;
});
