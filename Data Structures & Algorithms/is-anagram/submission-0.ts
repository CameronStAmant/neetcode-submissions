class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let mapS = new Map();
        let mapT = new Map();

        s.split("").map((char) => {
            if (mapS.has(char)) {
                const currentValue = mapS.get(char);
                mapS.set(char, currentValue + 1)
            } else {
                mapS.set(char, 1)
            }
        })

        t.split("").map((char) => {
            if (mapT.has(char)) {
                const currentValue = mapT.get(char);
                mapT.set(char, currentValue + 1)
            } else {
                mapT.set(char, 1)
            }
        })
        
        let isAnagram = true;

        if (mapS.size !== mapT.size) return false;

        mapS.forEach((value, key) => {
            if (mapT.get(key) !== value) {
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
