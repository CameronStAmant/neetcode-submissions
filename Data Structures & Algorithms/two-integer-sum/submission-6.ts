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
            if (map.get(otherNum) !== undefined) {
                answer = i > map.get(otherNum) ? [map.get(otherNum), i] : [i, map.get(otherNum)];
            } else {
                map.set(nums[i], i);
            }
        }

        return answer;
    }
}
