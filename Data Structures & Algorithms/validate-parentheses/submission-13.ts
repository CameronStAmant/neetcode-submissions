class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        let starters = {"(": ")", "{": "}", "[": "]"};

        for (let i = 0; i < s.length; i++) {
            if (starters[s.charAt(i)]) {
                stack.push(s.charAt(i));
            } else if (starters[stack.at(-1)] === s.charAt(i)) {
                stack.pop();
            } else {
                return false;
            }
        }

        if (stack.length === 0) {
            return true;
        }

        return false;
    }
}
