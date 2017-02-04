var express = require('express');
var router = express.Router();


var respObj = {
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
  };
/* GET users listing. */

router.get('/:id', function(req, res, next) {
  const id = req.params.id
  let cardsExist = false;
  respObj.cards.forEach( (card) => 
    {
      if(card.id === id){
        cardsExist = true;
        res.send(card);
      }
    }
  );
  cardsExist ? console.log('SUCCESS FOR ID: ' + id) : res.send({status: 'ERROR'});
});

router.get('/', function(req, res, next) {
  res.send(respObj);
});



module.exports = router;
