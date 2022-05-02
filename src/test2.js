class ListNode {
    constructor(x) {
        this.value = x;
        this.next = null;
    }
}

function convertArrayToList(arr) {
    return arr.reverse().reduce((acc, cur) => {
        if (acc) {
            const node = new ListNode(cur);
            node.next = acc;
            return node;
        }

        return new ListNode(cur);
    }, null);
}

const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);