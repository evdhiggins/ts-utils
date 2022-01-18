import { isNotUndefined } from '../guards';

/**
 * An implementation of Array.prototype.reduce with support for an asynchronous
 * callback function
 */
export async function asyncReduce<T>(
    arr: T[],
    cb: (acc: T, el: T, index: number, originalArray: T[]) => T | Promise<T>,
): Promise<T>;
export async function asyncReduce<T>(
    arr: readonly T[],
    cb: (acc: T, el: T, index: number, originalArray: readonly T[]) => T | Promise<T>,
): Promise<T>;
export async function asyncReduce<T, R>(
    arr: T[],
    cb: (acc: R, el: T, index: number, originalArray: T[]) => R | Promise<R>,
    initialValue: R,
): Promise<R>;
export async function asyncReduce<T, R>(
    arr: readonly T[],
    cb: (acc: R, el: T, index: number, originalArray: readonly T[]) => R | Promise<R>,
    initialValue: R,
): Promise<R>;
export async function asyncReduce<T, R>(
    arr: T[] | readonly T[],
    cb: (acc: R, el: T, index: number, originalArray: T[]) => R | Promise<R>,
    maybeInitialValue?: R,
): Promise<R> {
    const length = arr.length;
    const hasStartingAcc = isNotUndefined(maybeInitialValue);

    if (!hasStartingAcc && length === 0) {
        throw new TypeError(`Cannot reduce an empty array with no defined initialValue`);
    }

    // if no starting acc value is provided we'll use the first index of arr
    let acc = (hasStartingAcc ? maybeInitialValue : arr[0]) as R;

    // if a starting acc value is not provided, we'll need to start iterating at the second element
    let i = hasStartingAcc ? 0 : 1;

    for (; i < length; i++) {
        acc = await cb(acc, arr[i] as T, i, arr as T[]);
    }

    return acc;
}
