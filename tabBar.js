const test = [
  {id: 1, type: '아침공복', value: 0},
  {id: 2, type: '아침식전', value: 4},
  {id: 3, type: '아침식전', value: 2},
  {id: 4, type: '아침식전', value: 3},
  {id: 5, type: '아침식후', value: 2},
  {id: 6, type: '아침식후', value: 8},
  {id: 7, type: '아침식후', value: 8},
  {id: 8, type: '아침식후', value: 10},
  {id: 9, type: '아침식후', value: 7},
  {id: 10, type: '점심식전', value: 15},
  {id: 11, type: '점심식전', value: 2},
  {id: 12, type: '점심식전', value: 13},
  {id: 13, type: '점심식후', value: 23},
  {id: 14, type: '취침전', value: 2},
  {id: 15, type: '취침전', value: 24},
  {id: 16, type: '취침전', value: 3},
  {id: 17, type: '취침전', value: 30},
]
let result = {}
const qwe = (array) => {
  array.forEach((object) => {
    if (!result[object.type] || result[object.type].value <= object.value) {
      result[object.type] = object
    }
  })
  return Object.values(result)
}

// let result = {}
// const filter = (array) => {
//   array.forEach((v) => {
//     if (!result[v.type] || result[v.type] <= v.value) {
//       result[v.type] = v
//     }
//   })
//   return result
// }
console.log(qwe(test))

// const test = [
//   {id: 1, type: '아침공복', value: 0},
//   {id: 2, type: '아침식전', value: 4},
//   {id: 3, type: '아침식전', value: 2},
//   {id: 4, type: '아침식전', value: 3},
//   {id: 5, type: '아침식후', value: 2},
//   {id: 6, type: '아침식후', value: 8},
//   {id: 7, type: '아침식후', value: 8},
//   {id: 8, type: '아침식후', value: 10},
//   {id: 9, type: '아침식후', value: 7},
//   {id: 10, type: '점심식전', value: 15},
//   {id: 11, type: '점심식전', value: 2},
//   {id: 12, type: '점심식전', value: 13},
//   {id: 13, type: '점심식후', value: 23},
//   {id: 14, type: '취침전', value: 2},
// ]
// function result(test) {
//   let line = {}
//   test.sort((a, b) => {
//     if (a.type === b.type) {
//       return a.value - b.value
//     }
//   })
//   for (let i = 0; i < test.length; i++) {
//     if (i === test.length - 1) {
//       if (test[i].type !== test[i - 1].type) {
//       }
//     } else {
//       if (test[i].type !== test[i + 1].type) {
//         // line.push(test[i]);
//       }
//     }
//   }
//   return line
// }

// console.log(
//   test.sort((a, b) => {
//     if (a.type === b.type) {
//       return a.value - b.value
//     } else {
//       return 0
//     }
//   })
// )
// console.log(result(test))
