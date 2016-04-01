export class ElementAnimatePolyfill {
  animate() {
    return 'true';
  }
}

if (!Element.prototype['animate']) {
  var polyfill = new ElementAnimatePolyfill();

  Element.prototype['animate'] = function() {
    return polyfill.animate();
  }
}
