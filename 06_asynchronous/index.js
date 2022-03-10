// asynchronous => artinya data yang menunggu
const withCallback = (a, b, callback) => { // function di taruh di dalam argument, argument bernama callback ini sebuah function
  let jumlah = 0
  setTimeout(() => {
    jumlah += a + b
    callback(jumlah) // () disini untuk menjalakan
  }, 500) // karena dia menunggu 0.5 detik
} // udah dilupakan
 

const hasil = (jumlah) => { // udah nunggu .5 detik, es6 => setelah 2015
  withCallback(jumlah, 10, (jumlah2) =>
    withCallback(jumlah2, jumlah, console.log)
  ) // disuruh nunggu .5 detik
}

// withCallback(10, 5, hasil) // kenapa gada () / untuk menjalakan

const withPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 500)
  })
}

// console.log(withPromise(10, 5)) // ini pending karna datanya menunggu 0.5 detik
// withPromise(10, 5) // 0.5
//   .then((nilai) => withPromise(nilai, 5)) // 0.5
//   .then(nilai2 => withPromise(nilai2, 10)) // 0.5
//   .then(nilai3 => withPromise(nilai3, 10)) // 0.5
//   .then(nilai4 => console.log(nilai4)) // 0.5

// syntactic sugar
const withAsync = async (a, b) => {
  const jumlah = await withPromise(a, b) // 0.5
  const jumlah2 = await withPromise(jumlah, b) // 0.5
  const jumlah3 = await withPromise(jumlah2, b) // 0.5
  const jumlah4 = await withPromise(jumlah3, b) // 0.5

  console.log(jumlah4)
}

// withAsync(10, 5)

const withFastAsync = async (a, b) => {
  const jumlahArray = await Promise.all([
    withPromise(a, b),
    withPromise(2, 0),
    withPromise(5, 0)
  ]) // promise all ini berjalan secara concurrently
  console.log(jumlahArray.reduce((first, next) => first + next))
}

withFastAsync(10, 5)