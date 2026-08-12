class LRUCache {
    private map: Map<number, number>;
    private sizeLimit: number;
    private log: number[];

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.map = new Map();
        this.log = [];
        this.sizeLimit = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.map.get(key)) {
            this.log = this.log.filter((val) => val !== key);
            this.log.push(key);
            if (this.log.length > this.sizeLimit) {
                let removeKey = this.log.shift();
                this.map.delete(removeKey);
            }
            if (this.map.get(key)) {
                return this.map.get(key);
            } else {
                return -1;
            }
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        this.log = this.log.filter((val) => val !== key);
        this.log.push(key);
        if (this.log.length > this.sizeLimit) {
            let removeKey = this.log.shift();
            this.map.delete(removeKey);
        }
        this.map.set(key, value);
    }
}
