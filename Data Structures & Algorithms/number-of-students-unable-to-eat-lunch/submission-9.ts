class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const map = new Map();

        students.forEach((s) => {
            if (map.has(s)) {
                map.set(s, map.get(s) + 1);
            } else {
                map.set(s, 1);
            }
        });

        let res = 0;
        for (const s of sandwiches) {
            if (map.has(s) && map.get(s) !== 0) {
                map.set(s, map.get(s) - 1);
            } else {
                map.forEach((val) => {
                    res += val;
                });
                break;
            }
        }

        return res;
    }
}
