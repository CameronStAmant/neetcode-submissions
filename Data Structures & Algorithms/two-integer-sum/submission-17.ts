class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numsMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if (numsMap.has(difference)) {
                return [numsMap.get(difference), i]
            } else {
                numsMap.set(nums[i], i);
            }
        };

    }
}
