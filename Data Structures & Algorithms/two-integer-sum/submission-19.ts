class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (numMap.has(diff)) {
                return [numMap.get(diff), i];
            } else {
                numMap.set(nums[i], i);
            }
        }
    }
}
