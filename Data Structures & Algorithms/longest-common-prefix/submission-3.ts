class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let answer = "";

        for (let i = 0; i < strs[0].length; i++) {
            for (let s of strs) {
                if (i === s.length || s[i] !== strs[0][i]) {
                    console.log('break');
                    return answer;
                }
                console.log(s[i], strs[0][i]);
            }
            console.log(answer);
            answer += strs[0][i];
        }

        return answer;
    }
}
