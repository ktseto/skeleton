const { commerce, date } = require('faker');
const db = require('./db');

const toSQLDate = dt => `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;

(async () => {
  let script;

  script = `
    CREATE TABLE IF NOT EXISTS table1 (
      id SERIAL PRIMARY KEY,
      item VARCHAR(40) NOT NULL,
      quantity INT NOT NULL,
      rating DECIMAL,
      created_date TIMESTAMP NOT NULL);`;

  for (let i = 0; i < 10; i++) {
    const item = commerce.product();
    const quantity = Math.floor(Math.random() * 20);
    const rating = (Math.random() * 5).toFixed(1);
    const createdDate = toSQLDate(date.past());

    script = script.concat(`
      INSERT INTO
      table1 (item, quantity, rating, created_date)
      VALUES ('${item}',${quantity},${rating},'${createdDate}');`);
  }

  await db.query(script);
})();
