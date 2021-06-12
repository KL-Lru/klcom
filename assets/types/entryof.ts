export type entryof<T> = {[K in keyof T]: [K, T[K]] }[keyof T];
