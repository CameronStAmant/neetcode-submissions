class LRUCache {
    private map: Map<number, number>;
    private capacity: number;
    private cache: number[];

    refreshExistingCache(key: number) {
        this.cache = this.cache.filter((val) => val !== key);
        this.cache.push(key);
    }

    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.map = new Map();
        this.cache = [];
        this.capacity = capacity;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.map.get(key)) {
            this.refreshExistingCache(key);
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
        this.refreshExistingCache(key);
        if (this.cache.length > this.capacity) {
            let removeKey = this.cache.shift();
            this.map.delete(removeKey);
        }
        this.map.set(key, value);
    }
}
