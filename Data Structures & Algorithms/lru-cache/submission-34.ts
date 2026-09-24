class LRUCache {
    private capacity;
    private map;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return this.map.get(key);
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
        } else {
            this.map.set(key, value);
            if (this.map.size > this.capacity) {
                const iterator = this.map.entries();
                const removethis = iterator.next().value[0];
                this.map.delete(removethis);
            }
        }
    }
}
