export class ElementAnimatePolyfill {
  animate() {
  }
}

if (!Element.prototype['animate']) {
  var polyfill = new ElementAnimatePolyfill();

  Element.prototype['animate'] = function() {
    return polyfill.animate();
  }
}
