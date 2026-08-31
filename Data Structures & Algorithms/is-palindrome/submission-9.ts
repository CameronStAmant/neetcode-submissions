class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let lPointer = 0;
        let rPointer = s.length - 1;

        while (lPointer < rPointer) {
            while (!isAlphaNumeric(s[lPointer]) && lPointer < rPointer) {
                lPointer++;
            }

            while (!isAlphaNumeric(s[rPointer]) && lPointer < rPointer) {
                rPointer--;
            }
            console.log(s[lPointer], s[rPointer]);
            if (s[lPointer].toLowerCase() !== s[rPointer].toLowerCase()) return false;

            lPointer++;
            rPointer--;
        }

        return true;
    }
}

function isAlphaNumeric (char: string) {
    if ((char >= 'a' && char <= "z") || (char >= 'A' && char <= "Z") || (char >= '0' && char <= '9')) return true;
    return false;
}