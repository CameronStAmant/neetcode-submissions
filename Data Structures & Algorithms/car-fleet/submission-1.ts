class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const stack = [];

        let joinedVehicles: { position: number, speed: number }[] = [];
        position.forEach((p, index) => {
                joinedVehicles.push({position: p, speed: speed[index]});
        });

        joinedVehicles.sort((a,b) => b.position - a.position);
        console.log(joinedVehicles);

        let prevVehicleTime = null;
        for (const vehicle of joinedVehicles) {
            const vehicleTime = (target - vehicle.position) / vehicle.speed;
            if (!prevVehicleTime) {
                prevVehicleTime = vehicleTime;
                stack.push(vehicleTime);
            }

            if (vehicleTime <= prevVehicleTime) {

            } else {
                prevVehicleTime = vehicleTime;
                stack.push(vehicleTime);
            }
        }

        return stack.length;
    }
}
