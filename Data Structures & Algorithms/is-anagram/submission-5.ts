class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false;
        let mapS = new Map();
        let mapT = new Map();

        for (let i = 0; i < s.length; i++) {
            if (mapS.has(s[i])) {
                console.log('2')
                mapS.set(s[i], mapS.get(s[i]) + 1);
            } else {
                console.log('1')
                mapS.set(s[i], 1);
            }

            if (mapT.has(t[i])) {
                mapT.set(t[i], mapT.get(t[i]) + 1);
            } else {
                mapT.set(t[i], 1);
            }
        }

        console.log(mapS, mapT);

        // s.split("").map((char) => {
            // if (mapS.has(char)) {
            //     const currentValue = mapS.get(char);
            //     mapS.set(char, currentValue + 1)
            // } else {
            //     mapS.set(char, 1)
            // }
        // })

        // t.split("").map((char) => {
        //     if (mapT.has(char)) {
        //         const currentValue = mapT.get(char);
        //         mapT.set(char, currentValue + 1)
        //     } else {
        //         mapT.set(char, 1)
        //     }
        // })
        
        let isAnagram = true;

        mapS.forEach((value, key) => {
            if (mapT.get(key) !== value) {
                isAnagram = false;
            }
        })

        return isAnagram;
    }
}
