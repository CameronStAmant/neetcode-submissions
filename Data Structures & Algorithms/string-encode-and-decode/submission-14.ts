class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoding = "";
        strs.forEach((string) => {
            encoding += `${string.length}#${string}`;
        });
        return encoding;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let decoding = [];

        let startDecoder = 0;
        let index = 0;

        while (index < str.length) {
            if (str[index] === "#") {
                let decoder = str.slice(startDecoder, index);
                index++;
                let word = str.slice(index, index + parseInt(decoder));
                decoding.push(word);
                startDecoder = index + parseInt(decoder);
                index += parseInt(decoder);
            } else {
                index++;
            }
        }

        return decoding;
    }
}
