import percentage from "../../src/modules/calculation/util/percentage";
import gcd from "../../src/modules/calculation/util/gcd";
import exp from "../../src/modules/calculation/util/exp";

describe("Percentage Calculation", () => {
    test("calculates percentage of a number", () => {
        expect(percentage(50, 200)).toBe(25);
    });

    test("handles zero total", () => {
        expect(percentage(50, 0)).toBe(Infinity);
    });

    test("handles negative numbers", () => {
        expect(percentage(-50, 200)).toBe(-25);
    });
});

describe("GCD Calculation", () => {
    test("calculates GCD of two numbers", () => {
        expect(gcd(48, 18)).toBe(6);
    });

    test("handles zero", () => {
        expect(gcd(0, 5)).toBe(5);
    });

    test("handles negative numbers", () => {
        expect(gcd(-48, 18)).toBe(6);
    });
});

describe("Exponential Calculation", () => {
    test("calculates exponentiation", () => {
        expect(exp(2, 3)).toBe(8);
    });

    test("handles zero exponent", () => {
        expect(exp(2, 0)).toBe(1);
    });

    test("handles negative base", () => {
        expect(exp(-2, 3)).toBe(-8);
    });
});
