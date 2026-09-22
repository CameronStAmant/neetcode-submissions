class MinStack {
    private stack: number[];
    private min: number[];
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if (val > this.min.at(-1)) {
            this.min.push(this.min.at(-1))
        } else {
            this.min.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.min.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min.at(-1);
    }
}
