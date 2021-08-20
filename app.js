//Generate PIN
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = Math.round(Math.random() * (9999 - 1111) + 1111);
  document.getElementById("pin-display").value = pin;
});

//Pin calculator
document
  .getElementById("calc-area")
  .addEventListener("click", function (event) {
    const numbers = event.target.innerText;
    const displayNum = document.getElementById("calc-display");
    const displayNumValue = displayNum.value;
    if (numbers == "C") {
      displayNum.value = "";
    } else if (numbers == "DEL") {
      const newDisplayNum = displayNumValue.substring(
        0,
        displayNumValue.length - 1
      );
      displayNum.value = newDisplayNum;
    } else if (numbers.length > 1) {
      displayNum.value = "";
    } else {
      displayNum.value += numbers;
    }
  });

//Pin Verification
//Show Msg
function verify(isTrue) {
  const successMsg = document.getElementById("success-msg");
  const failMsg = document.getElementById("fail-msg");

  if (isTrue) {
    successMsg.style.display = "block";
    failMsg.style.display = "none";
  } else {
    failMsg.style.display = "block";
    successMsg.style.display = "none";
  }
}
//verify
document.getElementById("verify-btn").addEventListener("click", function () {
  const pinValue = document.getElementById("pin-display").value;
  const inputValue = document.getElementById("calc-display").value;
  if (pinValue == inputValue) {
    verify(true);
  } else {
    verify(false);
  }
});
