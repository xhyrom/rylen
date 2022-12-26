export class Store<T> {
    private _store: Map<string, T> = new Map();

    protected get(key: string): T | undefined {
        return this._store.get(key);
    }

    protected set(key: string, value: T): this {
        this._store.set(key, value);
        return this;
    }

    protected delete(key: string): boolean {
        return this._store.delete(key);
    }

    public has(key: string): boolean {
        return this._store.has(key);
    }

    public clear(): void {
        this._store.clear();
    }

    public get size(): number {
        return this._store.size;
    }

    public get length(): number {
        return this.size;
    }

    public get values(): IterableIterator<T> {
        return this._store.values();
    }

    public get keys(): IterableIterator<string> {
        return this._store.keys();
    }
}