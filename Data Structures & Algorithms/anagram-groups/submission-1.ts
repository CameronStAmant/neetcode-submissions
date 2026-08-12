class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let map = new Map();

        for (let i = 0; i < strs.length; i++) {
            let key = new Array(26).fill(0);
            const string = strs[i].split("");

            string.forEach((char) => {
                let spotInArray = char.charCodeAt(0) - 97;
                key[spotInArray] += 1;
            })
            let stringifiedKey = JSON.stringify(key);
            if (map.get(stringifiedKey)) {
                map.set(stringifiedKey, [...map.get(stringifiedKey), string.join("")])
            } else {
                map.set(stringifiedKey, [string.join("")])
            }
        }

        return [...map.values()];
    }
}
