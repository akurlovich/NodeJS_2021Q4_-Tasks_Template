const uuid = require('uuid');
const Column = require('../columns/column.model.js');

class Board {
  constructor({
    id = uuid.v4(),
    title = 'Board',
    columns = [new Column()]
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

  
module.exports = Board;