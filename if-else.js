let nilai = 80;

// if else itu tergantung nilai nya, hasilnya true atau false

if (nilai >= 80 && nilai <= 100) {
  nilai = "A";
} else if (nilai >= 70 && nilai < 80) {
  nilai = "B";
} else if (nilai >= 60 && nilai < 70) {
  nilai = "C";
} else {
  nilai = "D";
}

console.log(nilai);
nilai = 60;

// && itu dimana semua kondisi nya harus terpenuhi maka akan menghasilkan true
// or itu dimana salah satu dari kondisi harus terpenuhi maka akan menghasilkan true

let banding = nilai >= 80 && nilai <= 100; //antara true dan false
console.log(banding, "&&");
let banding2 = nilai >= 80 || nilai < 100; //antara true dan false
console.log(banding2, "||");
let banding3 = nilai != 50;
console.log(banding3, "!");

// perbedaaan == dan ===

let x = 50; //tipe data number
let y = "50"; //tipe data string

let banding4 = x == y;
console.log(banding4, "4");
let banding5 = x === y;
console.log(banding5, "5");

//if else ini bisa bersarang
let number = 6;
if (number > 5) {
  if (number % 2 === 0) {
    console.log("Lebih besar dari 5 dan genap");
  } else {
    console.log("Lebih besar dari 5 dan ganjil");
  }
} else {
  if (number % 2 === 0) {
    console.log("Lebih kecil atau sama dengan dari 5 dan genap");
  } else {
    console.log("Lebih kecil atau sama dengan dari 5 dan ganjil");
  }
}
