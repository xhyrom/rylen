export * from "./hooks";

export * from "./builders";

export * from "./stores";

export * from "./structures";

export function use(call: Function, ...args: any[]) {
    return call(...args);
}
