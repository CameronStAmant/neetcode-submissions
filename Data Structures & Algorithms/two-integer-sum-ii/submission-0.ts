class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;

        while (leftPointer < rightPointer) {
            if (numbers[leftPointer] + numbers[rightPointer] < target) {
                leftPointer++;
            } else if (numbers[leftPointer] + numbers[rightPointer] > target) {
                rightPointer--;
            } else {
                console.log(numbers[leftPointer] + numbers[rightPointer]);
                return [leftPointer + 1, rightPointer + 1];
            }
        }

    }
}
