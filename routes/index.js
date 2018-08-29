var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/member', (req, res) => {
  res.json({
    "Photons": [
      {"id": "Overall", "lvl": 2494, "exp": 253899074},
      {"id": "Attack", "lvl": 91, "exp": 6102107},
      {"id": "Defence", "lvl": 99, "exp": 13236295},
      {"id": "Strength", "lvl": 90, "exp": 5691983},
      {"id": "Constitution", "lvl": 99, "exp": 14988361},
      {"id": "Ranged", "lvl": 99, "exp": 13568494},
      {"id": "Prayer", "lvl": 95, "exp": 9156284},
      {"id": "Magic", "lvl": 99, "exp": 13686701},
      {"id": "Cooking", "lvl": 99, "exp": 14779091},
      {"id": "Woodcutting", "lvl": 99, "exp": 15006340},
      {"id": "Fletching", "lvl": 99, "exp": 13450301},
      {"id": "Fishing", "lvl": 99, "exp": 15383961},
      {"id": "Firemaking", "lvl": 99, "exp": 13871005},
      {"id": "Crafting", "lvl": 88, "exp": 4620867},
      {"id": "Smithing", "lvl": 91, "exp": 6003668},
      {"id": "Mining", "lvl": 97, "exp": 11275939},
      {"id": "Herblore","lvl": 99, "exp": 13721491},
      {"id": "Agility", "lvl": 89, "exp": 5294773},
      {"id": "Thieving", "lvl": 78, "exp": 1663866},
      {"id": "Slayer", "lvl": 95, "exp": 9322528},
      {"id": "Farming", "lvl": 87, "exp": 4010657},
      {"id": "Runecrafting", "lvl": 97, "exp": 10760628},
      {"id": "Hunter", "lvl": 80, "exp": 2151600},
      {"id": "Construction", "lvl": 83, "exp": 2757335},
      {"id": "Summoning", "lvl": 85, "exp": 3308402},
      {"id": "Dungeoneering", "lvl": 100, "exp": 15322646},
      {"id": "Divination", "lvl": 91, "exp": 6227589},
      {"id": "Invention", "lvl": 70, "exp": 8536162}
    ]
  });
});

module.exports = router;
