/**
 Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You must do this in-place without altering the nodes' values.

For example,
Given {1,2,3,4}, reorder it to {1,4,2,3}. 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head === null || head.next === null) return;
    
    var firstNode = head;
    var size = 0;
    
    while (firstNode !== null){
        firstNode = firstNode.next;
        size ++;
    }
    var reverseList = head;
    for(var i = 0; i < parseInt(size / 2); i++){
        reverseList = reverseList.next;
    }

    reverseList = reverse(reverseList, parseInt(size / 2) + size%2);
    var tmpHead = head;
    
    for(i = 0; i < parseInt(size / 2) - (size + 1)%2; i++){
        var tmp = tmpHead.next;
        var tmpR = reverseList.next;
        reverseList.next = tmp;
        tmpHead.next = reverseList;
        tmpHead = tmp;
        reverseList = tmpR;
    }
};

var reverse = function(list, size){
    var tmpNode = null;
    var tmp = null;

    for(var i = 0; i < size; i++){
        tmp = list.next;
        list.next = tmpNode;
        tmpNode = list;
        list = tmp;
    }
    return tmpNode;
}