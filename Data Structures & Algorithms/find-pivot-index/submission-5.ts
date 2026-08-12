class Solution {
    private prefix: number[] = [];
    private postfix: number[] = [];
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums: number[]): number {
        const arrayTotal = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        let prefixTotal = 0;
        for (let i = 0; i < nums.length; i++) {
            prefixTotal += nums[i];
            this.prefix.push(prefixTotal);
        }

        // let postfixTotal = 0;
        // for (let i = nums.length - 1; i >= 0; i--) {
        //     postfixTotal += nums[i];
        //     this.postfix.unshift(postfixTotal);
        // }

        let answer = -1;
        for (let i = 0; i < nums.length; i++) {
            if (this.prefix[i] * 2 - nums[i] === arrayTotal) {
                answer = i;
                break;
            }
        }

        return answer;
    }
}
