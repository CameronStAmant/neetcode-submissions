class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map();

        let duplicateFound = false;
        nums.map((value) => {
            const foundValue = map.get(value);
            if (foundValue !== undefined) {
                duplicateFound = true;
            } else {
                map.set(value, 1)
            }
        })


        return duplicateFound ? true : false;
    }
}
