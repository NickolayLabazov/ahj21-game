export default class Game {
  constructor() {
    this.lastPosition = -1;
    this.field = 0;
    this.board = 1;
  }

  rand() {
    let position = Math.ceil((Math.random() * this.board ** 2) - 1);
    if (position === this.lastPosition) {
      position = this.rand();
    }
    this.lastPosition = position;
    return position;
  }

  fieldCreate(board) {
    this.board = board;
    this.field = document.createElement('div');
    this.field.classList.add('field');
    const width = 124 * board;
    this.field.style.width = `${width}px`;
    document.body.appendChild(this.field);
    for (let i = 0; i < board ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.field.appendChild(cell);
    }
  }

  imgCreate(time) {
    const goblin = document.createElement('img');
    goblin.setAttribute('src', './img/goblin.png');
    setInterval(() => {
      const position = this.rand();
      this.field.childNodes[position].appendChild(goblin);
    }, time);
  }
}
