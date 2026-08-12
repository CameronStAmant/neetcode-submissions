class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);
        const stack = [];

        temperatures.map((temp, index) => {
            let i = 1;
            while (temp > stack.at(-1)?.temp) {
                let item = stack.pop();
                result[item.index] = index - item.index;
                i++;
            }

            stack.push({temp, index});
        });

        return result;
    }
}
