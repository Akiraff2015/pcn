var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/member', (req, res) => {
  res.json({
    "name": "Photons",
    "overall": [2494, 253899074],
    "attack": [91, 6102107],
    "defence": [99, 13236295],
    "strength": [90, 5691983],
    "constitution": [99, 14988361],
    "ranged": [99, 13568494],
    "prayer": [95, 9156284],
    "magic": [99, 13686701],
    "cooking": [99, 14779091],
    "woodcutting": [99, 15006340],
    "fletching": [99, 13450301],
    "fishing": [99, 15383961],
    "firemaking": [99, 13871005],
    "crafting": [88, 4620867],
    "smithing": [91, 6003668],
    "mining": [97, 11275939],
    "herblore": [13721491],
    "agility": [89, 5294773],
    "thieving": [78, 1663866],
    "slayer": [95, 9322528],
    "farming": [87, 4010657],
    "runecrafting": [97, 10760628],
    "hunter": [80, 2151600],
    "construction": [83, 2757335],
    "summoning": [85, 3308402],
    "dungeoneering": [100, 15322646],
    "divination": [91, 6227589],
    "invention": [70, 8536162]

  });
});

module.exports = router;
