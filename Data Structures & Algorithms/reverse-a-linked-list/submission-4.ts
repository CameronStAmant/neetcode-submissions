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
        let reverseItem = null;

        while (current) {
            let actualNextItem = current.next;
            current.next = reverseItem;
            reverseItem = current;
            current = actualNextItem;
        }
        
        return reverseItem;
    }
}
