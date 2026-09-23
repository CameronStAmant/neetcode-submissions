class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack = [];

        tokens.forEach((t) => {
            if (t === "+") {
                const b = parseInt(stack.pop());
                const a = parseInt(stack.pop());
                stack.push(a + b);
            } else if (t === '-') {
                const b = parseInt(stack.pop());
                const a = parseInt(stack.pop());
                stack.push(a - b);
            } else if (t === '*') {
                const b = parseInt(stack.pop());
                const a = parseInt(stack.pop());
                stack.push(a * b);
            } else if (t === '/') {
                const b = parseInt(stack.pop());
                const a = parseInt(stack.pop());
                stack.push(Math.trunc(a / b));
            } else {
                stack.push(parseInt(t))
            }
        })

        return stack.at(-1);
    }
}
