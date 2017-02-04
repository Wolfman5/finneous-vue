var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("CALLED THIS SERVICE");
  res.send({
      cards: [
        {
          id: '1',
          title: 'Asheville: The Princess and the Pup',
          imgUrl: '/static/img/Asheville.jpg',
          text: 'My girlfriend likes our dog way too much'
        },
        {
          id: '2',
          title: 'Playing with the puppy uncles',
          imgUrl: '/static/img/puppyUncles.jpg',
          text: 'Finley playing with his puppy uncles'
        }
      ]
  });
});

module.exports = router;
