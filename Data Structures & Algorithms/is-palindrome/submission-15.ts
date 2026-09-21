class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let leftIndex = 0;
        let rightIndex = s.length - 1;

        while (leftIndex < rightIndex) {
            while (!isAlphaNumeric(s[leftIndex]) && leftIndex < rightIndex) {
                leftIndex++;
            }

            while (!isAlphaNumeric(s[rightIndex]) && leftIndex < rightIndex) {
                rightIndex--;
            }

            if (
                s[leftIndex].toLowerCase() === s[rightIndex].toLowerCase()
            ) {
                leftIndex++;
                rightIndex--;
            } else {
                return false;
            }
        }
        return true;
    }
}

function isAlphaNumeric(c: string) {
    if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")) {
        return true;
    }
    return false;
}
