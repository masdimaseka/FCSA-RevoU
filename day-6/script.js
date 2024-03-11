const varSatu = "kata satu";
console.log(varSatu);

console.log(1 + 1);

let model = "avanza";

if (model == "innova") {
  console.log("ini mobil innova");
} else {
  console.log(`ini ${model}`);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter++;
}

function penjumlahanAngka(angka1, angka2) {
  return angka1 + angka2;
}

console.log(penjumlahanAngka(1, 2));

const plusAngka = (angka1, angka2) => {
  return angka1 + angka2;
};

console.log(plusAngka(1, 9));

function run() {
  alert("oke");
}

function combine() {
  let angka1 = document.getElementById("angka1").value;
  let angka2 = document.getElementById("angka2").value;

  let hasil = parseInt(angka1) + parseInt(angka2);

  console.log(hasil);
}
