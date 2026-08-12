class NumMatrix {
    private matrixArray: number[][] = [];
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix: number[][]) {
        // high level pass-throughs
        matrix.forEach((subArray) => {
            let total = 0;
            let tempArray: number[] = [];
            // within each subArray
            subArray.forEach((value) => {
                total += value;
                tempArray.push(total);
            });
            this.matrixArray.push(tempArray);
        });
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        let beginningRow = row1;
        let endRow = row2;
        let total = 0;

        while (beginningRow <= endRow) {
            let leftRange = col1 === 0 ? 0 : this.matrixArray[beginningRow][col1 - 1];
            let rightRange = this.matrixArray[beginningRow][col2];
            total += rightRange - leftRange;

            beginningRow++;
        }

        // pointers.forEach((location) => {
        //     console.log(this.matrixArray[location[0]][location[1]]);
        // });

        return total;
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
