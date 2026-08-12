class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = new Map();
        let answer = [];

        for (let i = 0; i < nums.length; i++) {
            let otherNum = target - nums[i];
            if (map.has(otherNum)) {
                return [map.get(otherNum), i];
            } else {
                map.set(nums[i], i);
            }
        }

        return [];
    }
}
