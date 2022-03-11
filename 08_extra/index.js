const list = [1, 2, 4, 5, 6]

const b = list.map((value, _index) => value + 1)
// console.log(b)

const map = (arrays, callback) => {
  let arr = []
  for (index in arrays) {
    arr.push(callback(arrays[index], index))
  }
  return arr
}

const _ = {
  map
}

// const t = _.map(list, (val, index) => val + 1)
// console.log(b)
// console.log(t)

Array.prototype.blush = function (callback) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i))
  }
  return arr
}

Array.prototype.look = function (callback) { // tidak di rekomendasikan, karena merusak js
  let arr = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      arr.push(this[i])
    }
  }
  return arr
}

const f = list.look((value, _index) => value % 2 === 0)
console.log(f)

// const l = list.blush((val, index) => val + 1)
// console.log(l)

