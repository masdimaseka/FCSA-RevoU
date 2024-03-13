let displayValue = "";
const display = document.getElementById("input");

function btnClick(e) {
  if (
    e == "AC" ||
    e == "C" ||
    e == "*" ||
    e == "7" ||
    e == "8" ||
    e == "9" ||
    e == "/" ||
    e == "4" ||
    e == "5" ||
    e == "6" ||
    e == "+" ||
    e == "1" ||
    e == "2" ||
    e == "3" ||
    e == "-" ||
    e == "+-" ||
    e == "0" ||
    e == "." ||
    e == "="
  ) {
    if (e == "AC") {
      displayValue = "";
    } else {
      displayValue += e;
    }
    display.value = displayValue;
  } else {
    console.log("err");
  }
}

document
  .getElementById("input")
  .addEventListener("input", function displayChange() {
    let e = this.value;
    // if (
    //   e == "AC" ||
    //   e == "C" ||
    //   e == "*" ||
    //   e == "7" ||
    //   e == "8" ||
    //   e == "9" ||
    //   e == "/" ||
    //   e == "4" ||
    //   e == "5" ||
    //   e == "6" ||
    //   e == "+" ||
    //   e == "1" ||
    //   e == "2" ||
    //   e == "3" ||
    //   e == "-" ||
    //   e == "+-" ||
    //   e == "0" ||
    //   e == "." ||
    //   e == "="
    // ) {
    //   console.log(e);
    // } else {
    //   console.log("err");
    // }

    // regex
    let chars = /^[0-9]+$/;

    if (chars.test(e)) {
      console.log("digits");
    } else {
      alert("err");
    }
  });
