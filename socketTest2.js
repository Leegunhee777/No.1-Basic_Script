const listUnderStaff = [
  {staffId: 20, staffName: '엄은비', id: 166034, name: 'a', email: 'a@a.a'},
  {staffId: 20, staffName: '엄은비', id: 166034, name: 'a', email: 'a@a.a'},
  {staffId: 20, staffName: '엄은비', id: 166034, name: 'a', email: 'a@a.a'},
  {staffId: 20, staffName: '엄은비', id: 166034, name: 'a', email: 'a@a.a'},
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166043,
    name: 'tttt',
    email: 'tttt@tttt.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166250,
    name: 'testtestest',
    email: 'testest@test.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166300,
    name: '테스트주',
    email: 'test22@test.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166317,
    name: '밈ㅇ밈',
    email: 'test12@test.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166317,
    name: '밈ㅇ밈',
    email: 'test12@test.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166291,
    name: 'sanfsi',
    email: 'sangsik@sangsik.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166780,
    name: 'sdndbsnddnd',
    email: 'sb@jejsj.com',
  },
  {
    staffId: 20,
    staffName: '엄은비',
    id: 166792,
    name: 'yidiydi',
    email: 'ngxjgxgj@ugtyg.com',
  },
]

const unreadMessage = [
  {
    id: 5772,
    roomId: 1547,
    date: '2021-06-11 17:26:52',
    writerId: 166250,
    message: '33333',
  },
  {
    id: 5743,
    roomId: 1570,
    date: '2021-06-11 14:28:49',
    writerId: 166300,
    message: '89131389',
  },
]

const asd = () => {
  let withNameList = []
  unreadMessage.forEach((element) => {
    listUnderStaff.forEach((obj) => {
      if (element.writerId === obj.id) {
        withNameList.push({...element, name: obj.name, email: obj.email})
      }
    })
  })
  console.log(withNameList)
}

asd()
