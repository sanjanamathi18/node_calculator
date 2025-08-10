import numberCruncher from "../../src/modules/calculation/numberCruncher";

describe("Number Cruncher", () => {
    test("calculates percentage", () => {
        expect(numberCruncher({ numOne: 50, numTwo: 200, operator: 'percentage' })).toBe(25);
    });

    test("calculates GCD", () => {
        expect(numberCruncher({ numOne: 48, numTwo: 18, operator: 'gcd' })).toBe(6);
    });

    test("calculates exponentiation", () => {
        expect(numberCruncher({ numOne: 2, numTwo: 3, operator: 'exponent' })).toBe(8);
    });
    test("adds two numbers", () => {
        expect(numberCruncher({ numOne: 2, numTwo: 3, operator: 'add' })).toBe(5);
    });
    test("subtracts two numbers", () => {
        expect(numberCruncher({ numOne: 5, numTwo: 3, operator: 'subtract' })).toBe(2);
    });
    test("multiplies two numbers", () => {
        expect(numberCruncher({ numOne: 5, numTwo: 3, operator: 'multiply' })).toBe(15);
    });
    test("divides two numbers", () => {
        expect(numberCruncher({ numOne: 6, numTwo: 3, operator: 'divide' })).toBe(2);
    });
    test("invalid operator", () => {
        expect(numberCruncher({ numOne: 6, numTwo: 3, operator: 'invalid' })).toBe(null);
    });
});
