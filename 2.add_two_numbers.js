/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    
    var l3 = new ListNode();
    var tmp = l3;
    var sum = 0;
    
    while(l1 !== null || l2 !== null || sum !== 0){
        tmp.next = new ListNode();
        
        if(l1!==null){
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        
        tmp.next.val = sum%10;
        sum = parseInt(sum/10);
        
        tmp = tmp.next;
    }
    return l3.next;
};