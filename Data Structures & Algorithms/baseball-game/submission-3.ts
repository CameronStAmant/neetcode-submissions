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
                result.push(result.at(-1) + result.at(-2));
            } else if (operations[i] === 'D') {
                result.push(result.at(-1) * 2);
            } else {
                result.push(parseInt(operations[i]));
            }
        }

        return result.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
    }
}
