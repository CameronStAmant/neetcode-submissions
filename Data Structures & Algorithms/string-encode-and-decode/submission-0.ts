class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        console.log(JSON.stringify(strs));
        return JSON.stringify(strs);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        return JSON.parse(str);
    }
}
