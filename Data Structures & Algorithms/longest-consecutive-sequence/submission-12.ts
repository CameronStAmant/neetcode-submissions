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
                let i = 1;
                let tempResult = 1;
                while (set.has(value + i)) {
                    tempResult++;
                    i++;
                }
                result = Math.max(result, tempResult);
            }
        });

        return result;
    }
}
