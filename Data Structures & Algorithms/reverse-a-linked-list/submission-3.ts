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
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let current = head;
        let reverseNext = null;

        while (current) {
            let actualNext = current.next;
            current.next = reverseNext;
            reverseNext = current;
            current = actualNext;
        }

        return reverseNext;
    }
}
