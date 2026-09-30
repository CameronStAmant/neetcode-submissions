class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const matchObj = { "(": ")", "{": "}", "[": "]" };
        let stack = [];
        
        for (let i = 0; i <= s.length - 1; i++) {
            if (matchObj[s[i]]) {
                stack.push(s[i]);
            } else if (matchObj[stack.at(-1)] === s[i]) {
                stack.pop();
            } else {
                return false;
            }
        }

        if (stack.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}
