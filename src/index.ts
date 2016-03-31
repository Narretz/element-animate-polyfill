import { Animation } from "./animation";

export class ElementAnimatePolyfill {
  animate(element : HTMLElement, keyframes : Object, options: number) {
    return new Animation(keyframes, options).start(element);
  }
}

console.log('polyfill?')

if (!Element.prototype['animate']) {
  var polyfill = new ElementAnimatePolyfill();

  Element.prototype['animate'] = function(keyframes, options) {
    return polyfill.animate(this, keyframes, options);
  }
}
