class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];
        let joinedVehicles: { position: number; speed: number }[] = [];

        position.forEach((p, index) => {
            joinedVehicles.push({ position: p, speed: speed[index] });
        });

        joinedVehicles.sort((a, b) => b.position - a.position);

        for (const vehicle of joinedVehicles) {
            stack.push((target - vehicle.position) / vehicle.speed);
            if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
        }

        return stack.length;
    }
}
