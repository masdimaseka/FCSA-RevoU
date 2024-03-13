var variable = "a";
let letible = "b";
const constanta = "c";

if (variable == "a") {
  console.log(variable);
}

if (letible == "b") console.log(letible);

constanta == "c" ? console.log(constanta) : console.log("bukan const");

for (let i = 0; i < 5; i++) {
  console.log(`indek ke-${i}`);
}

let index = 0;

while (index < 5) {
  console.log(`indek well ke-${index}`);
  index++;
}

function test1() {
  console.log("test1");
}

const test2 = () => {
  console.log("test2");
};

test1();
test2();

function calculate() {
  try {
    let testInput = document.getElementById("test-input").value;

    if (!isNaN(testInput)) {
      console.log("Number");
    } else {
      console.log("Not");
    }
  } catch (error) {
    console.log(error);
  }
}
