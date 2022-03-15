const arr = ["hallo", 02, { nama: "nando" }, [0, 2, 1], null, undefined] // didalamya bisa berisi apapun
// // arr[0],arr[1],arr[n]

// // cara akses persatuannya
// console.log(arr[2])
const obj = {
  1: "nando",
  2: "rio",
  "haha": "hihi"
}

const a = arr[3]
const b = a[1]
// console.log(Object.keys(obj).length)

// // check panjang array
// console.log(arr.length);
// console.log(arr[arr.length - 1])

// looping biasa, 4 <= 4 masih true
// for (let x = 0; x < arr.length; x++){
//   console.log(arr[x])
// }

// cara loop lain, untuk mengambil value aja
// for (let x of arr) {
//   console.log(x)
// }

// looping ambil index
// for (let i in arr) {
//   console.log(arr[i])
// }

// callback
// const panggil = (nama, callback) => {
//   let result;
//   result = callback(nama) // terima cuma satu argument
//   return result
// }

// const siswa = panggil("nando", (nama) => "Hai nama ku " + nama)
// console.log(siswa)

// filter itu mereturn sebuah array kalau true, dengan panjang bergantung dengan isi pengecekan
// const stringArray = arr.filter((item) => typeof item === "number")
// console.log(stringArray) 

const arr2 = [1, 2, 3, 4, 5] // hanya satu tipe data paling bagus
// map itu mereturn array dengan panjang yang sama
const arr2Tambah2 = arr2.map(nilai => nilai + 2)
// console.log(arr2Tambah2)

// void => tanpa pengembalian nilai / return
// const arr2ForEach = arr2.forEach(nilai => console.log(nilai + 2))
// console.log(arr2ForEach)

// console.log() // NaN => not a number
