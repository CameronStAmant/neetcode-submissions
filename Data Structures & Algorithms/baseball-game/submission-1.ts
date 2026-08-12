class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        let result = []

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "C") {
                result.pop();
            } else if (operations[i] === "+") {
                result.push(result[result.length -1] + result[result.length -2]);
            } else if (operations[i] === 'D') {
                result.push(result[result.length-1] * 2);
            } else {
                result.push(parseInt(operations[i]));
            }
            console.log(result);
        }

        return result.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    }
}
