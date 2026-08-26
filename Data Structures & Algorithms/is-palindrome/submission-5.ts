class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (!isAlpha(s.charAt(l)) && l < r) {
                l++;
            }

            while (!isAlpha(s.charAt(r)) && l < r) {
                r--;
            }

            if (s[l].toLowerCase() === s[r].toLowerCase()) {
                l++;
                r--;
            } else {
                return false;
            }
        }

        return true;
    }
}

function isAlpha(char: string) {
    if (
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        (char >= "0" && char <= "9")
    ) {
        return true;
    } else {
        return false;
    }
}
