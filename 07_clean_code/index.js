// pembuatan variable
// const namadepansayaadalah = "Barnando" // 
const namaDepanSayaAdalah = "Barnando" // sebutannya camelCase, ini biasanya dipake saat membuat variable dan function

class Siswa { // kalau class itu harus di awalai dengan huruf besar / CapitalCase

}

// jenis-jenis case / wadah
// camelCase // dipake untuk block scope
// snake_case => dipake di python
// CONSTANT_CASE => tipe data const / data yang pasti, untuk global scope
// CapitalCase => biasanya dipake di pembuatan class


class User {
  // ini optional
  // id;
  // nama;
  // umur;

  constructor(iniID, iniNama, iniUmur) {
    this.id = iniID
    this.nama = iniNama
    this.umur = iniUmur
  }

  getSiswa() { // method / inner function dalam class
    console.log(`hai nama saya ${this.nama} umur ${this.umur} tahun, nim saya ${this.id}`);
  }
}

const anton = new User(1212, "anton", 20)
// anton.getSiswa()

console.log(typeof User)