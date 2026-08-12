class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans = [];

        let iterations = 0;
        while (iterations < 2) {
            for (let i = 0; i < nums.length; i++) {
                ans.push(nums[i]);
            }
            iterations++;
        }

        return ans;
    }
}
