export class Player {
  _currentTime: number;
  _element: HTMLElement;
  _keyframes: Object;
  _keys: Array<string>;
  _startingTimestamp: number;
  onfinish: Function;
  totalTime: number;
  playing: boolean;

  constructor (element, keyframes, options) {
    this._keyframes = keyframes;
    this._keys = Object.keys(keyframes[0]);
    this._element = element;
    this._currentTime = 0;
    this._startingTimestamp = 0;

    this.totalTime = options.duration;
    this.onfinish = function() {};

    console.log(this._keyframes);
    console.log(this._keys);
  }

  get currentTime() {
    return this._currentTime;
  }

  play() {
    if (this.playing) return;
    this.playing = true;
    this._startingTimestamp = window.performance.now();
    this.tick();
  }

  _onfinish () {
    this.onfinish();
  }

  _computeProperties (percentage: number) {
    var start = this._keyframes[0];
    var end = this._keyframes[1];
    var keys = this._keys;

    var results = [];
    for (var i = 0; i < keys.length; i++) {
      var value, key = keys[i], unit = '', cleanStart, cleanEnd;

      if (start[key].slice(-2) === 'px' && end[key].slice(-2) === 'px') {
        cleanStart = start[key].slice(0, -2);
        cleanEnd = end[key].slice(0, -2);
        unit = 'px';
      } else {
        cleanStart = start[key];
        cleanEnd = end[key];
      }

      if (percentage == 1) {
        value = cleanEnd;
      } else {
        var diff = cleanEnd - cleanStart;
        value = (diff * percentage) + parseInt(cleanStart, 10);
      }
      results.push([key, Math.floor(value) + unit]);
    }
    return results;
  }

  tick() {
    var self = this;

    this._currentTime = window.performance.now() - this._startingTimestamp;

    var percentage = Math.min(this._currentTime / this.totalTime, 1);
    this._computeProperties(percentage).forEach(function(entry) {
      console.log('entry', entry);
      self._apply(entry[0], entry[1]);
    });

    if (percentage == 1) {
      this._onfinish();
    } else {
      window.requestAnimationFrame(function() {
        self.tick();
      });
    }
  }

  _apply(prop, value) {
    this._element.style[prop] = value;
  }
};