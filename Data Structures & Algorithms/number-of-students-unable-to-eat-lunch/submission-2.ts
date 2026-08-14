class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let i = 0;

        while (students.length !== 0 || i !== students.length - 1) {
        const currentStudent = students.shift();
            if (currentStudent === sandwiches[0]) {
                sandwiches.shift();
                i = 0;
            } else {
                students.push(currentStudent);
                i++;
            }

            if (i === students.length) {
                return students.length;
            }
        }

        return students.length;
    }
}
