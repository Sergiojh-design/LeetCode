/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    // Initialize slow and fast pointers to reach middle of linked list...
    let slow = fast = head;
    // Find the middle and previous of middle...
    let prev = null;
    // To store previous of slow pointer...
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    // Delete the middle node...
    if (!prev) return null;
    prev.next = slow.next;
    return head;
};