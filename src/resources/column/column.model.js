import { v4 } from 'uuid';

class Column {
  constructor({
                id = v4(),
                title = 'title',
                order = 0
              } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;
