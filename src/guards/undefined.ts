/**
 * A type guard to assert a value as NOT undefined
 */
export function isNotUndefined<T>(value: T | undefined): value is T {
    return typeof value !== 'undefined';
}
/**
 * A type guard to assert a value as undefined
 */
export function isUndefined<T>(value: T | undefined): value is undefined {
    return typeof value === 'undefined';
}
