class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];

        if (s.length % 2 !== 0) return false;

        for (const char of s) {
            if (["(", "{", "["].includes(char)) {
                stack.push(char);
            } else if (char === ")" && stack.at(-1) === "(") {
                stack.pop();
            } else if (char === "}" && stack.at(-1) === "{") {
                stack.pop();
            } else if (char === "]" && stack.at(-1) === "[") {
                stack.pop();
            } else {
                return false;
            }
        }

        if (stack.length > 0) return false;

        return true;
    }
}
