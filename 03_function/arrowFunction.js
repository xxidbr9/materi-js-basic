// () => console.log("hallo world");

// () // pemanggil function 

// const hallo = () => "hallo world"
// console.log(typeof hallo())

// (() => console.log("Hai"))(); // dipakai untuk mengambil data untuk pertama kali

// function biasa, this
function panggilSiswa(nama = "Rio") { // argument itu let
  console.log("Hai " + nama)
}

// panggilSiswa("Mika") // 
// panggilSiswa()

// jadi arrow 

const panggilSiswi = (nilai, nama = "Dandi", info = {}, teman = []) => { // = default value
  console.log(`Hai ${nama} kamu mendapat nilai ${nilai}`)
  // if (typeof info?.umur !== 'undefined') {
  //   console.log(`info umur kamu ${info.umur}`)
  // }
  if (!!info?.umur) {
    console.log(`info umur kamu ${info.umur}`)
  }
}

// panggilSiswi(90, "Rama", { umur: 20 }, []) // nama?: => itu optional
// panggilSiswi(98) // sebaiknya nilai default value itu berada di paling belakang


