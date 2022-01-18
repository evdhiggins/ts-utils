import { asyncReduce } from './asyncReduce';

const mockInput = [1, 2, 3, 4, 5] as const;
const mockCb = jest.fn(async (acc: number, n: number) => acc + n);
const expectedOutput = 15;
const mockStartingAcc = 0;

beforeEach(() => {
    jest.clearAllMocks();
});

test(`Return a promise that resolves to the expected value`, async () => {
    const result = await asyncReduce(mockInput, mockCb);
    expect(result).toStrictEqual(expectedOutput);
});

describe(`If no starting acc valued is provided...`, () => {
    test('The provided cb should be called one less time than the length of the input array', async () => {
        await asyncReduce(mockInput, mockCb);
        expect(mockCb).toHaveBeenCalledTimes(mockInput.length - 1);
    });

    test('The first acc value should be the first element in the array', async () => {
        await asyncReduce(mockInput, mockCb);
        expect(mockCb.mock.calls[0]?.[0]).toBe(mockInput[0]);
    });

    test('The first iterated value should be the second element in the array', async () => {
        await asyncReduce(mockInput, mockCb);
        expect(mockCb.mock.calls[0]?.[1]).toBe(mockInput[1]);
    });
});

describe(`If a starting acc valued is provided...`, () => {
    test('The provided cb should be called once for each element in the input array', async () => {
        await asyncReduce(mockInput, mockCb, mockStartingAcc);
        expect(mockCb).toHaveBeenCalledTimes(mockInput.length);
    });

    test('The first acc value should be the provided starting acc value', async () => {
        await asyncReduce(mockInput, mockCb, mockStartingAcc);
        expect(mockCb.mock.calls[0]?.[0]).toBe(mockStartingAcc);
    });

    test('The first iterated value should be the first element in the array', async () => {
        await asyncReduce(mockInput, mockCb, mockStartingAcc);
        expect(mockCb.mock.calls[0]?.[1]).toBe(mockInput[0]);
    });
});

test(`The provided cb should be called for each element in the input in the same order that they are defined`, async () => {
    await asyncReduce(mockInput, mockCb, mockStartingAcc);
    mockInput.forEach((el, i) => expect(mockCb.mock.calls[i]?.[1]).toBe(el));
});

test(`Calling ${asyncReduce.name} with an empty array an no initialValue will result in a TypeError`, async () => {
    const fn = () => asyncReduce([], mockCb);
    await expect(fn).rejects.toThrow();
});
