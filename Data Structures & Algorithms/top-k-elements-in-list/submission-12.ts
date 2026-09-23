class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let count = {};
        let freq = Array.from({ length: nums.length + 1 }, () => []);

        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }

        for (let c in count) {
            freq[count[c]].push(c)
        }

        let res = [];
        
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
