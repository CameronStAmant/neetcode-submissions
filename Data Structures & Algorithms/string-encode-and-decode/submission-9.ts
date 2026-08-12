class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = "";

        for (const string of strs) {
            let tempStr = "";

            tempStr = `${string.length}#${string}`;

            result = `${result}${tempStr}`;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let result = [];

        const regex = /[0-9]*#/;

        let continueTesting = true;
        let index = 0;
        while (continueTesting) {
            let stringFound = str.slice(index).match(regex);
            if (!stringFound) {
                continueTesting = false;
            } else {
                const stringLength = stringFound[0].slice(0, -1);
                const startOfWordIndex = stringLength.length + 1 + index;
                let word = str.slice(startOfWordIndex, startOfWordIndex + parseInt(stringLength));
                result.push(word);

                index = startOfWordIndex + parseInt(stringLength);
            }
        }

        return result;
    }
}
