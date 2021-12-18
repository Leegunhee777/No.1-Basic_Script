const qwe = [5, 6, 7, 8, 9]
const ewq = [5, 11, 7, 8, 9]

const test = (input1, input2) => {
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      break
    }
  }
  return true
}

test(qwe, ewq)
