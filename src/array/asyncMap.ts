/**
 * An implementation of Array.prototype.map with support for an asynchronous
 * callback function
 */
export async function asyncMap<T, R>(
    arr: T[],
    cb: (el: T, index: number, originalArray: T[]) => Promise<R> | R,
): Promise<R[]> {
    const newArray: R[] = [];

    // define length separately to avoid an infinite loop if `cb` appends to `arr`
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        newArray.push(await cb(arr[i] as T, i, arr));
    }
    return newArray;
}
