/*
-------------------------------------------------------------------------------------------------------
4. 노드가 비어있지 않고 0을 포함한 양의 정수를 표현하는 2개의 linked list 를 입력으로 받습니다. 
정수가 역순으로 저장되어 있으며 각각의 노드에는 숫자 한개가 있습니다.
2개의 숫자를 합하여 다시 역순의 linked list 를 리턴하는 함수를 작성하시오.

ex 1)

2 -> 4 -> 3
5 -> 6 -> 4
-----------
7 -> 0 -> 8

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

ex 2)
Input: l1 = [0], l2 = [0]
Output: [0]

ex 3)
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

안내:
각 linked list 범위는 [1, 100] 입니다.
각 노드의 값은 0 <= Node.val <= 9 과 같습니다.
0자체를 빼고는, 0으로 시작하는 정수는 입력으로 들어가지 않습니다. ex. 2 -> 1 -> 0 : 012

ex) java. 다른 언어를 사용한다면 동일하게 ListNode 를 정의하세요.
*
 * 아래의 single linked list 를 사용하세요.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 *

아래 함수를 완성하세요.

class Answer {
 public ListNode add(ListNode l1, ListNode l2) {
 // your code
 }
}
-----------------------------------------------------------------------------------------------------
*/

//Modified to fit the grammar of javaScript
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class List {
  constructor() {
    this.head = new ListNode()
  }

  makelist(list) {
    for (var i = 0; i < list.length; i++) {
      this.tailPush(list[i])
    }
  }
  tailPush(value) {
    const node = new ListNode(value)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
  }
  //solution function
  add(l1, l2) {
    // your code
    let currentNodeOfl1 = l1.head.next
    let currentNodeOfl2 = l2.head.next
    let arrayOfl1 = []
    let arrayOfl2 = []
    let result
    while (currentNodeOfl1 !== null) {
      arrayOfl1.push(currentNodeOfl1.value)
      currentNodeOfl1 = currentNodeOfl1.next
    }
    while (currentNodeOfl2 !== null) {
      arrayOfl2.push(currentNodeOfl2.value)
      currentNodeOfl2 = currentNodeOfl2.next
    }
    result =
      parseInt(arrayOfl1.reverse().join('')) +
      parseInt(arrayOfl2.reverse().join(''))
    this.makelist(String(result).split('').reverse())
  }
  print() {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(`${currentNode.value} -> `)
      currentNode = currentNode.next
    }
    console.log('LinkedList End')
  }
}

/*---------------------------------------------------------------------*/
//liked list, input값의 손쉬운 테스팅을 위한 구현입니다.
//test의 파라미터에 원하는 list를 입력하면,
//linked list가 만들어지고,이를 add함수의 파라미터로 사용되게 구현하였습니다.
/*---------------------------------------------------------------------*/
function test(array1, array2) {
  const newList1 = new List()
  newList1.makelist(array1)

  const newList2 = new List()
  newList2.makelist(array2)

  const answer = new List()
  answer.add(newList1, newList2) //Here is add function!
  console.log('Output LinkedList print')
  answer.print()

  //역순의 linked list 반환
  return answer
}

test([2, 4, 3], [5, 6, 4])
