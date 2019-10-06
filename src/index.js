module.exports = function zeros(expression) {
  let array = expression.split("*")
  function factorial(n) {
    let i = n.slice(0, -1)
    let p = 0
    while (i > 0) {
      if (i % 5 == 0 && i % 25 !== 0) {
        p++
      }
      else if (i % 25 == 0) {
        p = p + 2
      }
      i = i - 1
    }
    return p
  }
  function factorial2(n) {
    let i = n.slice(0, -2);
    let p = 0
    while (i > 0) {
      if (i % 5 == 0 && i % 25 !== 0) {
        p++
      }
      else if (i % 25 == 0) {
        p = p + 2
      }
      i = i - 2
    }
    return p
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i].slice(-2) == "!!") {
      array[i] = factorial2(array[i])
    }
    else {
      array[i] = factorial(array[i])
    }
  }
  return array.reduce((a, b) => a + b, 0)
}
