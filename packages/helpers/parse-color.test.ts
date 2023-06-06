import parseColor from './parse-color';

describe('Test parseColor', () => {
    test('Test 1. Parse hex color format', () => {
        const color: string =  '#000000';
        const expectedValue: string = '0, 0, 0';
        expect(parseColor(color)).toEqual(expectedValue);
    })
    test('Test 2. Parse hex color format', () => {
        const color: string =  '#ff0000';
        const expectedValue: string = '255, 0, 0';
        expect(parseColor(color)).toEqual(expectedValue);
    })
    test('Test 3. Parse hex color format', () => {
        const color: string =  '#ff00ff';
        const expectedValue: string = '255, 0, 255';
        expect(parseColor(color)).toEqual(expectedValue);
    })
    test('Test 4. Parse hex color format', () => {
        const color: string =  '#f391b8';
        const expectedValue: string = '243, 145, 184';
        expect(parseColor(color)).toEqual(expectedValue);
    })
    test('Test 5. Parse rgb color format', () => {
        const color: string =  'rgb(255, 149, 134)';
        const expectedValue: string = '255, 149, 134';
        expect(parseColor(color)).toEqual(expectedValue);
    })
});
