class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (!this.isAlphaNumeric(s[l]) && l < r) {
                l++;
            }

            while (!this.isAlphaNumeric(s[r]) && r > l) {
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

    isAlphaNumeric(char: string) {
        return (
            ("0" <= char && char <= "9") ||
            ("A" <= char && char <= "Z") ||
            ("a" <= char && char <= "z")
        );
    }
}
