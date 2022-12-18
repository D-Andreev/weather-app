import {formatDate, formatNumber, getAverage, getMode, objectToQs} from './utils';

describe('utils', () => {
  describe('objectToQs', () => {
    it('converts object to query string', () => {
      const qs = objectToQs({a: 1, b: 2, c: 3});

      expect(qs).toEqual('a=1&b=2&c=3');
    });
  });

  describe('formatDate', () => {
    it('formats date', () => {
      const formattedDate = formatDate(1671397200);

      expect(formattedDate).toEqual('12/18/2022');
    });
  });

  describe('getAverage', () => {
    it('gets average value from array of numbers', () => {
      const average = getAverage([1,2,3,4,5]);

      expect(average).toEqual(3);
    });
  });

  describe('formatNumber', () => {
    it('formats to a whole number', () => {
      const n = formatNumber(3.14);

      expect(n).toEqual(3);
    });
  });

  describe('getMode', () => {
    it('returns the most common item in an array', () => {
      const res = getMode(['3.14', '123', '432', '3.14', '123', '3.14']);

      expect(res).toEqual('3.14');
    });
  });
});

export {}
