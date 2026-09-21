class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        let res = [];
        nums.sort((a, b) => a - b);
        nums.map((outerNum, i) => {
            if (outerNum !== nums[i - 1]) {
                let leftPointer = i + 1;
                let rightPointer = nums.length - 1;

                while (leftPointer < rightPointer) {
                    if (
                        outerNum + nums[leftPointer] + nums[rightPointer] < 0 &&
                        leftPointer < rightPointer
                    ) {
                        leftPointer++;
                    }

                    if (
                        outerNum + nums[leftPointer] + nums[rightPointer] > 0 &&
                        leftPointer < rightPointer
                    ) {
                        rightPointer--;
                    }
                    if (
                        outerNum + nums[leftPointer] + nums[rightPointer] === 0 &&
                        leftPointer < rightPointer
                    ) {
                        res.push([outerNum, nums[leftPointer], nums[rightPointer]]);
                        while (outerNum + nums[leftPointer] + nums[rightPointer] === 0) {
                            rightPointer--;
                        }
                    }
                }
            }
        });
        return res;
    }
}
