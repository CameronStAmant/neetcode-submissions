class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        let matches = { "(": ")", "{": "}", "[": "]" };

        for (let i = 0; i < s.length; i++) {
            if (matches[s[i]]) {
                stack.push(s[i])
            } else if (matches[stack.at(-1)] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }

        if (stack.length !== 0) {
            return false;
        }

        return true;
    }
}
