class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftIndex = 0;
        let rightIndex = numbers.length - 1;

        while (leftIndex < rightIndex) {
            if (numbers[leftIndex] + numbers[rightIndex] < target) {
                leftIndex++;
            } else if (numbers[leftIndex] + numbers[rightIndex] > target) {
                rightIndex--;
            }

            if (numbers[leftIndex] + numbers[rightIndex] === target) {
                return [leftIndex + 1, rightIndex + 1];
            }
        }
    }
}
