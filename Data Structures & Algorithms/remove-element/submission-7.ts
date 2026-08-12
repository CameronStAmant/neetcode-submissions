class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] !== val) left++;
            if (nums[right] === val) right--;

            if (left >= right) break;

            if (nums[left] === val && nums[right] !== val) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                left++;
                right--;
            }
        }

        return nums.length - nums.filter((num) => num === val).length;
    }
}
