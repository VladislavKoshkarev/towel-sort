
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if (matrix === undefined || matrix.length === 0) return result
  for (let arr of matrix) {
    if (matrix.indexOf(arr) % 2 !== 0) arr.reverse()
    for (let el of arr) {
      result.push(el)
    }
  }
return result
}
