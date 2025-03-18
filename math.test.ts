import { mathUtilFn } from './math.utils';
const { sub, sum, mul, div } = mathUtilFn;
describe('Math Modules Test', () => {
   it('test for sum: it adds two numbers together', () => {
      expect(sum(10, 5)).toBe(15);
   });
   it('test for sub: it subtract two numbers together', () => {
      expect(sub(10, 5)).toBe(5);
   });
   it('test for mul: it multiply two numbers together', () => {
      expect(mul(10, 5)).toBe(50);
   });
   it('test for div: it divide two numbers together', () => {
      expect(div(10, 5)).toBe(2);
   });
});
