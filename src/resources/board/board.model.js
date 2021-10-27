import { v4 } from 'uuid';

class Board {
  constructor({
                id = v4(),
                title = 'title',
                columns = []
              } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
    // this.columns = [];
    // columns.forEach(col => {
    //   this.columns.push(new Column({title:col.title, order:col.order}));
    // });
  }
}

export default Board;
