class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const result = [];

        const combinedData = position.map((val, index) => [val, speed[index]]);
        combinedData.sort((a, b) => b[0] - a[0]);

        const time = combinedData.map((val) => (target - val[0]) / val[1]);

        time.forEach((val) => {
            if (result.length === 0) {
                result.push(val);
            } else if (result.at(-1) < val) {
                result.push(val);
            }
        });

        return result.length;
    }
}
