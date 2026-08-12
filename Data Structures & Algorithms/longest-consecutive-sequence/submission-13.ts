class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let result = 0;

        set.forEach((value: number) => {
            if (!set.has(value - 1)) {
                let length = 1;
                while (set.has(value + length)) {
                    length++;
                }
                result = Math.max(result, length);
            }
        });

        return result;
    }
}
