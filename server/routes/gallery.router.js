const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
let itemid = req.params.itemid;
console.log('itemid: ', itemid);
const queryText = `UPDATE "gallery" SET "likes" = likes + 1 WHERE "id"=$1;`
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
  })
});

module.exports = router;
