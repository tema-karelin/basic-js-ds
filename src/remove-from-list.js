const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function returnNext(linkedArr,mod) {
  // console.debug('returnNext MOD: ', mod);
  while (mod > 0) {
    return  returnNext(linkedArr.next,mod-1)
  }
  // console.debug('returnNext : ', linkedArr);
  return linkedArr;
}
function removeKFromList(l, k) {

  // найти эленменты в списке
  let indexArr = [];
  let index = 0;
  // const list = new ListNode(l);
  let list = {};


  Object.assign(list, l);

  console.debug('list: ',list);
  console.debug('l: ', l);
  console.debug('l.next: ', l.next);

  while (l) {
    console.debug("L внутри while: ",l);
    console.debug(index);
    if (l.value == k) {
      indexArr.push(index);
    }
    
      if (index&&l.next) {
      let listItem = returnNext(list, index)
      Object.assign(listItem.next, l.next);
      console.debug('OBJECT l.next: ', l.next);
      }

    
    index++;
    l = l.next;
    
  }

  console.debug(indexArr);
  console.debug("LLLLL: ", l);
  console.debug("LISTTTTTT: ", list);

  // indexArr.forEach((el, ind) => {
  for (let i = 0; i<indexArr.length; i++) {
    let cur = list;
    let firstRemoved;
    let listIndex = 1;
    if (indexArr[i] === 0) {
      console.debug(indexArr[i], "зашло в if ");
      console.debug("list foreach: ", JSON.stringify(cur));

      list = cur.next;

      console.debug("cur.next;: ", JSON.stringify(cur.next));
    } else {
      let prev = null;
      console.debug(indexArr[i], "зашло в else ");
      console.debug("prev: ", prev);
      console.debug("listIndex: ", listIndex);

      

      while (listIndex <= indexArr[i]) {
        console.debug("зашло в while в ", listIndex, "раз");
        console.debug("prev: ", prev);
        console.debug("cur: ", cur);
        prev = cur;
        cur = cur.next;
        listIndex++;
        console.debug("prev2: ", prev);
        console.debug("cur2: ", cur);

      }

      console.debug("prev.next = cur.next");
      console.debug(prev.next, "  =  ", cur.next);
      prev.next = cur.next;
      console.debug("list: ", JSON.stringify(list));
      console.debug("list: ", list);

    }
    indexArr.pop();
  };
  if (indexArr.length>0) {
    return removeKFromList(list, k);
  } else return list;
}

module.exports = {
  removeKFromList
};
