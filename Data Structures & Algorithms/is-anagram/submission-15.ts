class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        
        const mapS = new Map();
        const mapT = new Map();
        let isAnagram = true;

        for (let i = 0; i < s.length; i++) {
            if (mapS.has(s[i])) {
                mapS.set(s[i], mapS.get(s[i]) + 1)
            } else {
                mapS.set(s[i], 1)
            }

            if (mapT.has(t[i])) {
                mapT.set(t[i], mapT.get(t[i]) + 1)
            } else {
                mapT.set(t[i], 1)
            }
        }

        mapS.forEach((value, key) => {
            if (mapT.get(key) !== value) {
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
