class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        const map = new Map();
        let res = students.length;

        students.forEach((s) => {
            if (map.has(s)) {
                map.set(s, map.get(s) + 1);
            } else {
                map.set(s, 1);
            }
        });

        for (const s of sandwiches) {
            if (map.has(s) && map.get(s) > 0) {
                map.set(s, map.get(s) - 1);
                res--;
            } else {
                return res;
            }
        }

        return res;
    }
}
