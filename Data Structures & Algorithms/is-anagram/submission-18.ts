class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const sMap = new Map();
        const tMap = new Map();
        for (const char of s) {
            if (sMap.has(char)) {
                sMap.set(char, sMap.get(char) + 1);
            } else {
                sMap.set(char, 1);
            }
        }

        for (const char of t) {
            if (tMap.has(char)) {
                tMap.set(char, tMap.get(char) + 1);
            } else {
                tMap.set(char, 1);
            }
        }

        let anagram = true;

        sMap.forEach((value, key) => {
            if (tMap.has(key) && tMap.get(key) === value) {
            } else {
                anagram = false;
            }
        });


        tMap.forEach((value, key) => {
            if (sMap.has(key) && sMap.get(key) === value) {
            } else {
                anagram = false;
            }
        });

        return anagram;
    }
}
