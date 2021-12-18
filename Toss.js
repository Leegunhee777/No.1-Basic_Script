const codeOwnersMap = {
  scripts: ['배수진'],
  services: {
    'business-ledger': ['고찬균', '배수진'],
    'toss-card': ['채주민', '유재섭'],
    payments: ['유재섭'],
  },
}
function solution(codeOwnersMap, directory) {
  console.log(directory.split('/'))
  const splitArray = directory.split('/') //depth깊이

  let temp = codeOwnersMap
  for (i = 0; i < splitArray.length; i++) {
    const result = temp[splitArray[i]]
    temp = result
  }

  return [...temp]
}

solution(codeOwnersMap, 'services/business-ledger')
