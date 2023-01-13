const db = require('../config/db');

module.exports = class Comments {
    constructor(text, imgUrl) {
      this.text = text;
      this.imgUrl = imgUrl;
    }
  
    static fetchAll() {
      return db.execute('SELECT * FROM Comments');
    }

    static post(text, imgUrl) {
      return db.execute('INSERT INTO Comments (content, img_url) VALUES (?, ?)', [text, imgUrl]);
    }
  };