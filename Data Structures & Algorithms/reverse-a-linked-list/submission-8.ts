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
        let reverseNextNode = null;

        while (current) {
            let actualNext = current.next;
            current.next = reverseNextNode;
            reverseNextNode = current;
            current = actualNext;
        }

        return reverseNextNode;
    }
}
