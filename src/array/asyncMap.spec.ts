import { asyncMap } from './asyncMap';

const mockInput = [1, 2, 3, 4, 5];
const mockCb = jest.fn(async (n: number) => n + 1);
const expectedOutput = [2, 3, 4, 5, 6];

beforeEach(() => {
    jest.clearAllMocks();
});

describe(`Return a promise that resolves to an array...`, () => {
    test(`With the same length as the original array`, async () => {
        const result = await asyncMap(mockInput, mockCb);
        expect(result).toHaveLength(mockInput.length);
    });

    test(`With contents matching expected values after cb`, async () => {
        const result = await asyncMap(mockInput, mockCb);
        expect(result).toStrictEqual(expectedOutput);
    });
});

test(`The provided cb should be called once for each element in the array`, async () => {
    await asyncMap(mockInput, mockCb);
    expect(mockCb).toHaveBeenCalledTimes(mockInput.length);
});

test(`The provided cb should be called for each element in the input in the same order that they are defined`, async () => {
    await asyncMap(mockInput, mockCb);
    mockInput.forEach((el, i) => expect(mockCb.mock.calls[i]?.[0]).toBe(el));
});
