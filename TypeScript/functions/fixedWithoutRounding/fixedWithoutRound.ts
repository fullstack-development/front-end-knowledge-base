export function fixedWithoutRound(num: number, fractionDigits: number): number {
  return Math.trunc(num * 10 ** fractionDigits) / 10 ** fractionDigits;
}

10.126.toFixed(2); // 10.13 - метод toFixed округляет.
fixedWithoutRound(10.126, 2); // 10.12 - метод fixedWithoutRound не округляет.
