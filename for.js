let error1 = {
  email: '이메일 필수',
}

let error2 = {
  career: [
    {
      title: '제목은 필수',
    },
  ],
}

const filter = (error) => {
  let Key = Object.keys(error)
  let NextLevel = error[Key]

  while (typeof NextLevel === 'object') {
    Key = Object.keys(NextLevel)
    NextLevel = NextLevel[Key]
  }

  return NextLevel
}

const result = filter(error2)
console.log(result)
