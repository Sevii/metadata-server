const express = require('express');
const app = express();
const port = 3000;

var metadata = {
  "name": "NFT_TESTORY",
  "animation_url": "",
  "animation_url_mime_type": "",
  "image_url": "https://guavalabs.io/images/apple-touch-icon.png",

  // Add more (non core) properties as long as it's a flat key/value structure 
  // and these values match the schema that the contract was registered with
  "attack": 4,
  "collectable": true,
  "god": "Ranged",
  "element": "Water",
  "product": 2,
  "rarity": 2,
  "type": 3,
}

app.get('/:nftId', (req, res) => {

    metadata.attack = req.params.nftId
    metadata.name = "NFT_TESTORY" + req.params.nftId
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(metadata, null, 3));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})