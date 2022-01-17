import { isTemplate } from '.';

test('isTemplate should be defined', () => {
    expect(isTemplate).toBeDefined();
});

test('isTemplate should be true', () => {
    expect(isTemplate).toBe(true);
});
