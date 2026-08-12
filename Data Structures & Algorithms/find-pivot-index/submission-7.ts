class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const arrayTotal = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        let leftSum = 0;
        for (let i = 0; i < nums.length; i++) {
            let rightSum = arrayTotal - nums[i] - leftSum;
            if (leftSum === rightSum) {
                return i;
            }
            leftSum += nums[i]
        }

        return -1;
    }
}
