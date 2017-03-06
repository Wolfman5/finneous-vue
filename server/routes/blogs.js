var express = require('express');
var router = express.Router();


var respObj = {
      cards: [
        {
          id: '1',
          title: 'Asheville: The Princess and the Pup',
          imgUrl: '/static/img/Asheville.jpg',
          date: 'Oct 11, 2016',
          shortText: 'My girlfriend loves our dog (and Asheville) way too much',
          text: 'October 10-12, 2016 we went to visit Asheville NC. Let me tell you -- that place is full of communists. It was awesome though. Lots of the good food and some of the best beer you can ever drink. Sierra Nevada was definitely impressive - and delicious. The best part were two of Ariel\'s best friend Maggie and her fiance, soon to be hubby, Austin Sanders. We had a blast. Can\'t wait to do it again.'
        },
        {
          id: '2',
          title: 'Playing with the puppy uncles',
          imgUrl: '/static/img/puppyUncles.jpg',
          date: 'Dec 27, 2016',
          shortText: 'Finley && His Puppy Uncles',
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
