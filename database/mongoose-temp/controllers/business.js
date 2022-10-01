const db = require('../index.js');
const MODEL = require('../models/MODEL_FILENAME.js');

module.exports = {
  controllerName: (req, res) => {
    MODEL.find({name: req.query.name})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).send('No matching business found', error);
    });
  },
}