class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let result;
        const stack: number[] = [];

        tokens.forEach((t) => {
            if (t === "+") {
                result = stack.pop() + stack.pop();
                stack.push(result);
            } else if (t === '*') {
                result = stack.pop() * stack.pop();
                stack.push(result);
            } else if (t === '-') {
                let val2 = stack.pop();
                let val1 = stack.pop();
                result = val1 - val2;
                stack.push(result);
            } else if (t === '/') {
                let val2 = stack.pop();
                let val1 = stack.pop();
                result = Math.trunc(val1 / val2);
                stack.push(result);
            } else {
                stack.push(parseInt(t));
            }
        })

        if (result === undefined) return stack.at(-1)

        return result;
    }
}
