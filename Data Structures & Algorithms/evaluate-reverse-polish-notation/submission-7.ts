class Solution {
    private stack: number[];
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        this.stack = [];
        const operators = ["*", "/", "-", "+"];
        for (const token of tokens) {
            if (!operators.includes(token)) {
                this.stack.push(parseInt(token));
            } else {
                    const val2 = this.stack.pop();
                    const val1 = this.stack.pop();

                    if (token === "*") {
                        const result = val1 * val2;
                        this.stack.push(result);
                    } else if (token === "/") {
                        const result = Math.trunc(val1 / val2);
                        this.stack.push(result);
                    } else if (token === "-") {
                        const result = val1 - val2;
                        this.stack.push(result);
                    } else if (token === "+") {
                        const result = val1 + val2;
                        this.stack.push(result);
                    }
            }
        }

        return this.stack.at(0);
    }
}
