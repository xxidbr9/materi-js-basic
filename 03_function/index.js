// definisiin dlu, <definisi><namaFunction>(){}

// scope / var itu function scope
var nilai = 2

function tambah() {
  nilai += 1
}

console.log(nilai);
// (), kurung artinya menjalankan
tambah();
console.log(nilai);
tambah();
tambah();
console.log(nilai);

// ambil nama dalam function
// {
//   var nama = "nando" // function scope
//   let nama2 = "akbar" // block scope
//   console.log(nama2)
// }

// kalau let bakal ekslusif di function bersangkutan
// function panggilNama() {
//   var nama = "nando"
// }

// panggilNama()
// console.log(nama)

// memiliki argument
function siswa(namaSiswa) {
  console.log(`hai saya ${namaSiswa}`)
}

siswa("anton")

function penjumlahan(x, y) {
  console.log(x + y)
}

penjumlahan(3, 4)

// return => atau pengambilan nilai, penerusan nilai, argument dia itu let
function pengurangan(x, y) {
  // x -= 2 // tidak dianjurkan, karna kita merubah isi dan memakai nama variablenya
  nilaiDikurang2 = x - 2
  return nilaiDikurang2 - y
}

const nilaiPengurangan = pengurangan(10, 5) // artinya isi
console.log(nilaiPengurangan)

// short hand function, dengan arrow function
const perkalian = (a, b) => a * b // langsung return
const pembagian = (a, b) => { // harus pakai kurung kurawal buat logika return
  const nilaiDikurangi_4 = a - 4
  return nilaiDikurangi_4 / b
}

console.log(perkalian(10, 2))
console.log(pembagian(24, 5))

// lambda kalkulus, biasany dipakai di pembuatan framework
const lambda = (a) => (b) => a + b
console.log(lambda(10)(20));

// ... artinya rest, atau sisa, ototmatis bentuknya sebuah array
function penguranganNilai(...nilai) {
  let jumlah = 0;
  for (let i = 0; i < nilai.length; i++) {
    jumlah -= nilai[i]
  }

  return nilai
}

console.log(79, penguranganNilai(10, 2, 1))

// bentuk yang kyak array
const b = {
  0: 1,
  1: 2
}

let jumlah = 0
for (let i = 0; i < Object.keys(b).length; i++) {
  jumlah -= b[i]
}

console.log(jumlah)

// rest argument, biasa dipake di nilai yg opsional
const jumlahNilai = (nilaiAwal, ...nilai) => nilai.reduce((first, next) => first + next) - nilaiAwal
console.log(jumlahNilai(2, 1, 1, 1, 1, 1)) // 2 ke belakang itu sisa

// this

