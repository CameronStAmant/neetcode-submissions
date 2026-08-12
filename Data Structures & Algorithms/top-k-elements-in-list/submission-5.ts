class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const result = [];
        const hash = new Map();

        nums.forEach((num) => {
            if (hash.has(num)) {
                hash.set(num, hash.get(num) + 1);
            } else {
                hash.set(num, 1);
            }
        });

        hash.forEach((value, key) => {
            if (result.length < k) {
                result.push({ key, value });
            } else {
                result.sort((a, b) => a.value - b.value);
                if (value > result[0].value) {
                    result.shift();
                    result.push({ key, value });
                }
            }
        });

        return result.map((kv) => kv.key);
    }
}
