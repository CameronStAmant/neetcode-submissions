class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let numsMap = new Map();
        let result: number[] = [];

        nums.forEach((num, index) => {
            const difference = target - nums[index];
            if (numsMap.has(difference)) {
                result = [numsMap.get(difference), index]
            } else {
                numsMap.set(num, index);
            }
        });

        return result;
    }
}
