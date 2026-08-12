class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const closeToOpen = { ")": "(", "}": "{", "]": "[" };

        if (s.length % 2 !== 0) return false;

        for (const char of s) {
            if (char in closeToOpen) {
                if (stack.length > 0 && closeToOpen[char] === stack.at(-1)) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0
    }
}
