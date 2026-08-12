class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let result = [];
        let count = {};

        for (let value of nums) {
            if (!count[value]) {
                count[value] = 0;
            }

            count[value] += 1;
        }

        const sortedResults = [];
        for (const value in count) {
            sortedResults.push([value, count[value]]);
        }

        sortedResults.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            result.push(sortedResults[i][0]);
        }

        return result;
    }
}
