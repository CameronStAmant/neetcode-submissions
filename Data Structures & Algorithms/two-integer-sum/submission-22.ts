class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hash = new Map();

        for (let i = 0; i < nums.length; i++) {
             if (hash.has(target - nums[i])) {
                return [hash.get(target - nums[i]),i];
            } else if (!hash.has(nums[i])) {
                hash.set(nums[i], i);
            }
        }
    }
}
