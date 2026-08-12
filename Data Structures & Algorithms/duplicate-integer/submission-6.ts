class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let map = new Map();

        let duplicateFound = false;
        
        for (let i = 0; i < nums.length; i++) {
            const foundValue = map.get(nums[i]);
            if (foundValue !== undefined) {
                duplicateFound = true;
                break;
            } else {
                map.set(nums[i], 1)
            }
        }


        return duplicateFound ? true : false;
    }
}
