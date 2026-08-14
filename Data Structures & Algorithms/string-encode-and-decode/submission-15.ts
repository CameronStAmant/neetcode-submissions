class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";

        strs.forEach((string) => {
            encoded += `${string.length}&${string}`
        })

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoded = [];
        
        let i = 0;
        while (i < str.length - 1) {
            let b = str.indexOf("&", i);
            const count = parseInt(str.slice(i, b));
            decoded.push(str.slice(b + 1, count + b + 1))

            i = b + count + 1;
        }
        
        return decoded;
    }
}
