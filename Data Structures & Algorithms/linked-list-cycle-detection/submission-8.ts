/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let slowPointer = head?.next;
        let fastPointer = head?.next?.next;
        while (true) {
            if (fastPointer === null || fastPointer === undefined) {
                return false;
            }
            if (slowPointer.val === fastPointer.val) {
                return true;
            }
            slowPointer = slowPointer?.next;
            fastPointer = fastPointer?.next?.next;
        }
    }
}
