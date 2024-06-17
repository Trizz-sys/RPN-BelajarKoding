// cara membuat variabel
var a = "a";
let b = "b";
const c = "c";

// variabel bisa menampung tipe data string(text), integer(number), boolean(true/false), object.

let nama = "Bagus"; //Type data String(text)
let umur = 21; //Type data number
let apakahBenar = true; //type data Boolean
let uang = 5000.5; //number dengan memakai koma(desimal)

// Operator Aritmatika
let angka1 = 10;
let angka2 = 20;
console.log(angka1 + angka2, "Pertambahan");
console.log(angka1 - angka2, "Pengurangan");
console.log(angka1 / angka2, "Pembagian");
console.log(angka1 * angka2, "Perkalian");
console.log(angka1 % angka2, "Modulus(sisa bagi)");

//Belajar mengisi Variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika); //30

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika); //-10

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika); //Tidak diketahui cape ngitung bang

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika); //200

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika); //10

//String juga bisa ditambah tetapi string itu tidak bisa dikurang dengan operator aritmatika
let firstName = "Bayu";
let lastName = "Subagja";
let fullName = firstName + " " + lastName;

console.log(fullName);
console.log(firstName + " " + lastName);
console.log(firstName - lastName); //Program akan tetap memberikan output tetapi dengan hasil NaN

// Alur pembacaan code
// Untuk membaca code dengan cara membaca dari kiri ke kanan dan atas ke bawah
// Contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20
number = false;
console.log(number + 10); //10
// Kenapa isinya 10 ?, karena didalam dunia pemograman itu false = 0 dan true = 1
console.log(true + 10); //11

//Membaca error
//Error itu menjadi panduan kita dimana kita jadi tahu letak error nya dimana dan salah nya dimana
// Yang ditakutkan yaitu dimana pemograman yang berhasil tetapi ada bug, itulah yang menyebabkan
// Programmer itu bingung sampe pegang kepala

// Contoh error
// const hewan = "jerapah";
// console.log(hewan);
// hewan = "buaya";

// auto comentar dengan cara tekan shift + /
//Tips membiasakan selalu teliti dalam pembuatan code dan jika ada error dibaca aja , dann harus membiasakan jika ingin belajar koding
// karena ngoding itu habit
