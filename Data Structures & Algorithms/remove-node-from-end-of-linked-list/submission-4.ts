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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy = new ListNode();
        dummy.next = head;
        let left = dummy;
        let right = dummy;
        let prev = left;

        for (let i = 1; i <= n; i++) {
            right = right.next;
        }

        while (right) {
            prev = left;
            left = left.next;
            right = right.next;
        }

        prev.next = left.next;

        return dummy.next;
    }
}
