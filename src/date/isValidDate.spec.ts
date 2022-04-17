import { isValidDate } from './isValidDate';

describe(`Return "true" for valid date inputs`, () => {
    test(`Date('2020-01-01')`, () => {
        expect(isValidDate(new Date('2020-01-01'))).toBeTruthy();
    });

    test(`Date('2020-02-29')`, () => {
        expect(isValidDate(new Date('2020-02-29'))).toBeTruthy();
    });

    test(`'1900-12-31'`, () => {
        expect(isValidDate('1900-12-31')).toBeTruthy();
    });
});

describe(`Return "false" for invalid date inputs`, () => {
    test(`Date('2022-02-29')`, () => {
        expect(isValidDate(new Date('2022-02-29'))).toBeFalsy();
    });

    test(`Date('asdf')`, () => {
        expect(isValidDate(new Date('asdf'))).toBeFalsy();
    });

    test(`''`, () => {
        expect(isValidDate('')).toBeFalsy();
    });
});
