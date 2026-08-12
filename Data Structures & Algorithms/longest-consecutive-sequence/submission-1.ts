class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let sortedNums = nums.sort((a, b) => a - b);
        let result = 0;
        let tempResult = 0;

        for (let i = 0; i < sortedNums.length; i++) {
            console.log(tempResult);
            if (tempResult === 0) {
                tempResult++;

                if (result < tempResult) {
                result = tempResult;
            }
            }

            const prevNum = sortedNums[i - 1];
            if (sortedNums[i] === prevNum) {
                continue;
            } else if (sortedNums[i] - 1 === prevNum) {
                tempResult++;
            } else {
                tempResult = 0;
            }
            if (result < tempResult) {
                result = tempResult;
            }
        }

        return result;
    }
}
