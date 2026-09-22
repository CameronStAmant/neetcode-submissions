class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res = 0;
        let leftPointer = 0;
        let rightPointer = heights.length - 1;

        while (leftPointer < rightPointer) {
            const volume = (rightPointer - leftPointer) * Math.min(heights[leftPointer], heights[rightPointer]);
            if (volume > res) {
                res = volume;
            }

                        if (heights[leftPointer] < heights[rightPointer]) {
                leftPointer++;
            } else {
                rightPointer--;
            }

        }

        return res;
    }
}
