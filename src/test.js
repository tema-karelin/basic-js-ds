class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
};
class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    getUnderlyingList() {
        return this.head;
    }

    enqueue(value) {
        if (this.length === 0) {
            this.head = new ListNode(value);
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next
            }

            current.next = new ListNode(value);
        }
        this.length++;
    }

    dequeue() {
        if (this.length == 0) return;

        // delete first element from list

        let current = this.head;
        this.head = current.next;

        this.length--;
        return current.value;
    }
}

const lis = new Queue();

let arrr = [3, 1, 2, 3, 4, 5];

arrr.forEach((el, i, initialArr) => {
    lis.enqueue(el);
})


console.log('initialArr: ', arrr);
console.log('initialArr to LIST: ', JSON.stringify(lis));

function removeKFromList(list, k) {

    // найти эленменты в списке
    let current = list.head;
    let indexArr = [];
    let index = 0;

    while (current) {
        if (current.value == k) {
            indexArr.push(index);
        }
        current = current.next;
        index++;
    }

    console.log(indexArr);

    indexArr.forEach((el, ind) => {
        let cur = list.head;
        if (el === 0) {
            console.log(el, "зашло в if ");
            console.log("list: ", JSON.stringify(list));

            list.head = cur.next;
            
            console.log("cur.next;: ", JSON.stringify(cur.next));
        } else {
            let prev = null;
            let listIndex = 1;
            console.log(el, "зашло в else ");
            console.log("prev: ", prev);
            console.log("listIndex: ", listIndex);



            while (listIndex < el) {
                console.log("зашло в while в " , listIndex, "раз");
                console.log("prev: ", prev);
                console.log("cur: ", cur);
                prev = cur;
                cur = cur.next;
                listIndex++;
                console.log("prev2: ", prev);
                console.log("cur2: ", cur);
                
            }
            console.log ("prev.next = cur.next");
            console.log (prev.next,"  =  ",cur.next);
            prev.next = cur.next;
            console.log("list: ", JSON.stringify(list));

        }
    });
    return list;
}

JSON.stringify(removeKFromList(lis, 3));