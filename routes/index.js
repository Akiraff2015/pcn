var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PCN' });
});

router.get('/rankings', (req, res, next) => {
  res.render('rank', {title: 'Rankings'});
});

router.get('/api/member', (req, res) => {
  res.json({
    "Photons": [
      {"skill": "Overall", "lvl": 2494, "exp": 253899074},
      {"skill": "Attack", "lvl": 91, "exp": 6102107},
      {"skill": "Defence", "lvl": 99, "exp": 13236295},
      {"skill": "Strength", "lvl": 90, "exp": 5691983},
      {"skill": "Constitution", "lvl": 99, "exp": 14988361},
      {"skill": "Ranged", "lvl": 99, "exp": 13568494},
      {"skill": "Prayer", "lvl": 95, "exp": 9156284},
      {"skill": "Magic", "lvl": 99, "exp": 13686701},
      {"skill": "Cooking", "lvl": 99, "exp": 14779091},
      {"skill": "Woodcutting", "lvl": 99, "exp": 15006340},
      {"skill": "Fletching", "lvl": 99, "exp": 13450301},
      {"skill": "Fishing", "lvl": 99, "exp": 15383961},
      {"skill": "Firemaking", "lvl": 99, "exp": 13871005},
      {"skill": "Crafting", "lvl": 88, "exp": 4620867},
      {"skill": "Smithing", "lvl": 91, "exp": 6003668},
      {"skill": "Mining", "lvl": 97, "exp": 11275939},
      {"skill": "Herblore","lvl": 99, "exp": 13721491},
      {"skill": "Agility", "lvl": 89, "exp": 5294773},
      {"skill": "Thieving", "lvl": 78, "exp": 1663866},
      {"skill": "Slayer", "lvl": 95, "exp": 9322528},
      {"skill": "Farming", "lvl": 87, "exp": 4010657},
      {"skill": "Runecrafting", "lvl": 97, "exp": 10760628},
      {"skill": "Hunter", "lvl": 80, "exp": 2151600},
      {"skill": "Construction", "lvl": 83, "exp": 2757335},
      {"skill": "Summoning", "lvl": 85, "exp": 3308402},
      {"skill": "Dungeoneering", "lvl": 100, "exp": 15322646},
      {"skill": "Divination", "lvl": 91, "exp": 6227589},
      {"skill": "Invention", "lvl": 70, "exp": 8536162}
    ]
  });
});

module.exports = router;
