const head = {next: null}

function tailPush(value) {
  const node = {value: value, next: null}

  let currentNode = head

  while (currentNode.next) {
    currentNode = currentNode.next
  }
  currentNode.next = node
}

function makeList(list) {
  for (var i = 0; i < list.length; i++) {
    tailPush(list[i])
  }
}

function print() {
  let currentNode = head.next
  while (currentNode !== null) {
    console.log(currentNode.value)
    // console.log(currentNode)
    currentNode = currentNode.next
  }
  console.log('lkedList End')
}

makeList([2, 5, 4, 2, 3])
print()
