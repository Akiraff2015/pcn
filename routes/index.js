var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/member', (req, res) => {
  res.json({
    "name": "Photons",
    "overall": [{"id": 2494, "exp": 253899074}],
    "attack": [{"id": 91, "exp": 6102107}],
    "defence": [{"id": 99, "exp": 13236295}],
    "strength": [{"id": 90, "exp": 5691983}],
    "constitution": [{"id": 99, "exp": 14988361}],
    "ranged": [{"id": 99, "exp": 13568494}],
    "prayer": [{"id": 95, "exp": 9156284}],
    "magic": [{"id": 99, "exp": 13686701}],
    "cooking": [{"id": 99, "exp": 14779091}],
    "woodcutting": [{"id": 99, "exp": 15006340}],
    "fletching": [{"id": 99, "exp": 13450301}],
    "fishing": [{"id": 99, "exp": 15383961}],
    "firemaking": [{"id": 99, "exp": 13871005}],
    "crafting": [{"id": 88, "exp": 4620867}],
    "smithing": [{"id": 91, "exp": 6003668}],
    "mining": [{"id": 97, "exp": 11275939}],
    "herblore": [{"id": 99,"exp": 13721491}],
    "agility": [{"id": 89, "exp": 5294773}],
    "thieving": [{"id": 78, "exp": 1663866}],
    "slayer": [{"id": 95, "exp": 9322528}],
    "farming": [{"id": 87, "exp": 4010657}],
    "runecrafting": [{"id": 97, "exp": 10760628}],
    "hunter": [{"id": 80, "exp": 2151600}],
    "construction": [{"id": 83, "exp": 2757335}],
    "summoning": [{"id": 85, "exp": 3308402}],
    "dungeoneering": [{"id": 100, "exp": 15322646}],
    "divination": [{"id": 91, "exp": 6227589}],
    "invention": [{"id": 70, "exp": 8536162}]

  });
});

module.exports = router;
