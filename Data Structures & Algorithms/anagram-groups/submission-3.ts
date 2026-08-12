class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const results = new Map();

        strs.forEach((string) => {
            let stringRepresentation = new Array(26).fill(0);

            for (let i = 0; i < string.length; i++) {
                let charIndex = string.charCodeAt(i) - "a".charCodeAt(0);
                stringRepresentation[charIndex] += 1;
            }
            
            const strinifiedSR = JSON.stringify(stringRepresentation);
            if (results.has(strinifiedSR)) {
                results.set(strinifiedSR, results.get(strinifiedSR).concat(string));
            } else {
                results.set(strinifiedSR, [string]);
            }
        });


        return [...results.values()];
    }
}
