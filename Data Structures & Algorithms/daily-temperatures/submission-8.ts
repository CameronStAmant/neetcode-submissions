class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        temperatures.forEach((temp, index) => {
            if (temp > stack.at(-1)?.temp) {
                while (temp > stack.at(-1)?.temp) {
                    result[stack.at(-1)?.index] = index - stack.at(-1)?.index;
                    stack.pop();
                }
            }
            stack.push({ temp, index });
        });

        return result;
    }
}
