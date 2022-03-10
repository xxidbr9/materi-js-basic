// TIPE DATA

var umur = 10; // number
let nama = "nando" // string
const pekerjaan = "guru" //

const isWork = false // boolean
// https://www.w3schools.com/js/js_datatypes.asp => boolean

console.log(typeof umur)
console.log(typeof nama)
console.log(typeof isWork)

// perbadingan angka
console.log(2 > 1); // 
console.log(3 <= 3); // => true
console.log(3 < 3); // => false

// perbandingan isi
const nama2 = 'maulana'

// kalau sama dengan == 
console.log(nama == nama2)

// dia hanya membandingkan isi
console.log(26, "1" == 1)

// karna dia membandingkan type data
const x = "10" // string
const y = 10 //  number
console.log(31, x === y)
console.log(32, typeof x)
console.log(33, typeof y)


// keterbalikan nilai / short hand
console.log(37, !isWork)
console.log(38, !!isWork)
console.log(39, !!!!!isWork)

// ketimbang , meaningless, tidak perlu dicheck boolan lagi
console.log(42, isWork === false) // true

// GERBANG LOGIKA
// OR, AND
/* 
AND 
artinya, kalau tidak ada yang true, berarti false / harus true semua
[true] =>
      && => [true]
[true] =>
*/
console.log(53, true && !isWork && true && true); // true

// mau sebanyak true, kalau ada 1 false, bakal false
console.log(56, true && true && isWork); // false

/* 
OR 
or minimal true 1, bakal true
[true] =>
      || => [true]
[false] =>
*/

const isTrueOr = false || true || isWork
console.log(67, isTrueOr); // false

// NOR (not or)
// Kebalikan dari or
console.log(71,!isTrueOr);


// STRING
let note = "hallo nama ku"
console.log(note);

note = "hai"
console.log(note);

note = note + " nama ku " + nama
console.log(note);

note += " saya seorang " + pekerjaan
console.log(note)

let hari = "juma\'t"
console.log(hari)

// interpolation string, $ untuk memanggil variable, cuma berlaku di backtick ~
note = `${note} agama di hari ${hari + " ditanggal "+ 10}`
console.log(note)


// undefined
let gaji;
console.log(gaji);

// null, biasa buat handle error, untuk nilai kosong
let rumah = null;
console.log(rumah);
