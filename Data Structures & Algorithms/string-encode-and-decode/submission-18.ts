class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";

        strs.forEach((string) => {
            encoded += `${string.length}&${string}`;
        });

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoded = [];

        let d = 0;
        let i = 0;

        while (i < str.length) {
            if (str[i] === "&") {
                const c = parseInt(str.slice(d, i));
                i++;
                const s = str.slice(i, c + i);
                decoded.push(s);
                d = c + i;
                i += c;
            } else {
                i++;
            }
        }

        return decoded;
    }
}
