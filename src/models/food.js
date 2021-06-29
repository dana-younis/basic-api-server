'use strict';
const uuid = require('uuid').v4;

class Food {
  constructor() {
    this.db = [];
  }

  read(id) {
    if (id) {
      return this.db.find((food) => food.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    const food = {
      id: uuid(),
      data: obj,
    };
    this.db.push(food);
    return food;
  }

  delete(id) {
    this.db = this.db.filter((food) => food.id !== id);
    return this.db;
  }

  update(id, obj) {
    for (let i = 0; i < this.db.length; i++) {
      let food = this.db[i];
      if (food.id === id) {
        this.db[i].data = obj;
        return this.db[i];
      }
    }
  }
}

module.exports = Food;
