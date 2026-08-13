class MinStack {
    private stack: number[];
    private minStack: { num: number; min: number }[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        this.minStack.push({
            num: val,
            min: this.minStack.at(-1) !== undefined && this.minStack.at(-1).min < val ? this.minStack.at(-1).min : val,
        });
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
        this.minStack.pop();
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
        return this.minStack.at(-1).min;
    }
}
