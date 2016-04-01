import {ElementAnimatePolyfill} from '../src/index';

describe('ElementAnimatePolyfill', () => {
  it('should be true', () => {
    var inst = new ElementAnimatePolyfill();
    expect(inst.animate()).toEqual('true');
  });
});
