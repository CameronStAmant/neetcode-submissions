class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            let remaining = target - nums[i]
            if (map.has(remaining)) {
                return [map.get(remaining), i]
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
