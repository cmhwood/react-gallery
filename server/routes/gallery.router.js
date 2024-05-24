const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const pool = require('../modules/pool');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let itemid = req.params.id;
  console.log('itemid: ', itemid);
  const queryText = `UPDATE "gallery" SET "likes" = likes + 1 WHERE "id"=$1;`;
  pool
    .query(queryText, [itemid])
    .then((result) => res.sendStatus(200))
    .catch((error) => {
      console.error(`Error querying: `, error);
      res.status(500).send(error);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM "gallery";`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
