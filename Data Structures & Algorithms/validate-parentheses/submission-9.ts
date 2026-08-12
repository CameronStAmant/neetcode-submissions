class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const closeToOpen = { ")": "(", "}": "{", "]": "[" };

        if (s.length % 2 !== 0) return false;

        // bottom to top of stack
        for (const char of s) {
            if (closeToOpen[char]) {
                if (stack.length > 0 && closeToOpen[char] === stack.at(-1)) {
                    // closing bracket
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                // opening bracket
                stack.push(char);
            }
        }

        return stack.length === 0
    }
}
