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
        let counter = 0;
        let next = undefined;
        while (counter <= 1000 || next === null) {
            if (!head?.next || head === null) {
                return false;
            }
            head = head.next;
            counter++;
        }

        return true;
    }
}
