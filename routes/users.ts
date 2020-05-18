import express from 'express'
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('users router 发送这句话\n');
});

module.exports = router;
