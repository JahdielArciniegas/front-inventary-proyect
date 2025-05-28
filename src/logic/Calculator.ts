const calTotal = (amount: number, cost: number, result: number): number => {
  const total = amount * result;
  return total * cost;
};

const ractangleArea = (measureA: number, measureB: number): number =>
  measureA * measureB * 10;

const circleArea = (measure: number): number =>
  Math.pow(measure / 2, 2) * Math.PI * 10;

export default { calTotal, ractangleArea, circleArea };
