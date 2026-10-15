class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        const keys = { "[": "]", "(": ")", "{": "}" };

        for (let i = 0; i < s.length; i++) {
            if (keys[s[i]]) {
                stack.push(s[i])
            } else if (keys[stack.at(-1)] === s[i]) {
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
