class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let answer = "";
        let isValid = true;
        let index = 0;

        while (isValid) {
            let tempString = "";
            for (const string of strs) {
                if (string.slice(index, index + 1)) {
                    const char = string.slice(index, index + 1);
                    if (tempString === "") {
                        tempString = char;
                    }
                    if (tempString !== char) {
                        isValid = false;
                    }
                } else {
                    isValid = false;
                }
            }
            if (isValid) {
                answer += tempString;
                index++;
            }
        }

        return answer;
    }
}
