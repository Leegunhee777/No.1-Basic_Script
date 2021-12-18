const convertNumber = ({value, point = 0}) => {
  let newValue = 0
  if (value) newValue = Number(value)
  else return newValue

  return newValue.toFixed(point)
}

//  8.7 / 249.4
//   {convertNumber({value: day.totalProtein, point: 1}) >
//  convertNumber({value: day.recommendedProtein, point: 1}) ?
//  318 /1814
var value1 = 73.2234
var value2 = 290.7234

const compare = (a, b) => {
  if (a > b) {
    return true
  } else {
    return false
  }
}
//이상
console.log(value1.toFixed(1) > value2.toFixed(1))
//정상
console.log(Number(value1.toFixed(1)) > Number(value2.toFixed(1)))

console.log(Number(value1.toFixed(1)))
console.log(Number(value2.toFixed(1)))

console.log(value1.toFixed(1))
console.log(value2.toFixed(1))
