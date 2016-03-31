import { Player } from "./player";

export class Animation {
  keyframes: Object;
  options: number;

  constructor (keyframes : Object, options : number) {
    this.keyframes = keyframes;
    this.options = options;
  }

  start (element) {
    var player = new Player(element, this.keyframes, this.options);
    player.play();
    return player;
  }
}