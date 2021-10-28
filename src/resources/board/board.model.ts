import { v4 } from 'uuid';
import Column from '../column/column.model';

class Board {
  id: string;
  title: string;
  columns: Column[] | string[];
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
