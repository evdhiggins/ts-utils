import { isNotUndefined, isUndefined } from '.';

describe(isUndefined.name, () => {
    test(`Return true for an undefined input value`, () => {
        expect(isUndefined(undefined)).toBe(true);
    });

    test(`Return false for any non-undefined input value`, () => {
        expect(isUndefined(null)).toBe(false);
        expect(isUndefined([])).toBe(false);
        expect(isUndefined('')).toBe(false);
    });
});

describe(isNotUndefined.name, () => {
    test(`Return false for an undefined input value`, () => {
        expect(isNotUndefined(undefined)).toBe(false);
    });

    test(`Return true for any non-undefined input value`, () => {
        expect(isNotUndefined(null)).toBe(true);
        expect(isNotUndefined(0)).toBe(true);
        expect(isNotUndefined('')).toBe(true);
    });
});
