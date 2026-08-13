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
                stack.push(stack.pop() + stack.pop());
            } else if (t === '*') {
                stack.push(stack.pop() * stack.pop());
            } else if (t === '-') {
                let val2 = stack.pop();
                let val1 = stack.pop();

                stack.push(val1 - val2);
            } else if (t === '/') {
                let val2 = stack.pop();
                let val1 = stack.pop();
                
                stack.push(Math.trunc(val1 / val2));
            } else {
                stack.push(parseInt(t));
            }
        })

        if (result === undefined) return stack.at(-1);

        return result;
    }
}
