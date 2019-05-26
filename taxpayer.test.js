const taxCalc = require("./taxpayer");

// Cat_1

test("Calculates the taxes of annual salary below tier1", () => {
  expect(taxCalc(50000000)).toBe(2500000);
  expect(taxCalc(40000000)).toBe(2000000);
  expect(taxCalc(25000000)).toBe(1250000);
  expect(taxCalc(10000000.5)).toBe(500000.025);
});

// Cat_2

test("Calculates the taxes of annual salary between tier1 and tier2", () => {
  expect(taxCalc(100000000)).toBe(10000000);
  expect(taxCalc(200000000)).toBe(25000000);
  expect(taxCalc(220000000)).toBe(28000000);
  expect(taxCalc(250000000)).toBe(32500000);
});

// Cat_3

test("Calculates the taxes of annual salary between tier2 and tier3", () => {
  expect(taxCalc(300000000)).toBe(45000000);
  expect(taxCalc(350000000)).toBe(57500000);
  expect(taxCalc(370000000)).toBe(62500000);
  expect(taxCalc(500000000)).toBe(95000000);
});

// Cat_4

test("Calculates the taxes of annual salary above tier3", () => {
  expect(taxCalc(600000000)).toBe(125000000);
  expect(taxCalc(700000000)).toBe(155000000);
  expect(taxCalc(800000000)).toBe(185000000);
});

// Unwanted Input returns

test("Gets tax", () => {
  expect(taxCalc(0)).toBe("Invalid Input");
  expect(taxCalc("ABCD")).toBe("Invalid Input");
});
