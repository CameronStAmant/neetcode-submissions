class NumArray {
    private sumArray: number[] = [];
    /**
     * @param {number[]} nums
     */
    constructor(nums: number[]) {
        let total = 0;
        nums.forEach((num) => {
            total += num;
            this.sumArray.push(total);
        });
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left: number, right: number): number {
        let leftRange = left === 0 ? 0 : this.sumArray[left - 1];
        let rightRange = this.sumArray[right];
        return rightRange - leftRange;
    }
}
