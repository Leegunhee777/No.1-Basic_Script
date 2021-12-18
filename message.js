
const array = [
    {staffId: 17, staffName: "이현우", id: 166275, name: "kkh test", email: "enki.kim.dev@gmail.com"},
    {staffId: 17, staffName: "이현우", id: 166275, name: "qwe qwe", email: "enki.kim.dev@gmail.com"},
    {staffId: 17, staffName: "이현우", id: 166275, name: "kkh test", email: "enki.kim.dev@gmail.com"},
    {staffId: 17, staffName: "이현우", id: 166275, name: "ewq ewq", email: "enki.kim.dev@gmail.com"},
    {staffId: 17, staffName: "이현우", id: 166275, name: "zzz cxz", email: "enki.kim.dev@gmail.com"},
    {staffId: 17, staffName: "이현우", id: 166275, name: "vfb test", email: "enki.kim.dev@gmail.com"},
]

function memberNum (array){
    let temp = [];
    array.forEach(element => {
        temp.push(element.name);
    });

    console.log([...new Set(temp)].length);
    return [...new Set(temp).length]
}



memberNum(array);