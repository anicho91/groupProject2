const db = require('../models');

module.exports = function(app) {

    
    app.get('/api/user', function(req, res) {
      db.Inventory.findAll({})
      .then(function(dbInventory) {
        res.json(dbInventory);
      }).catch(function(error) {
        res.json({ error: error });
      });
    });

      app.post('/api/user', function(req, res) {
        db.Inventory.create(req.body).then(function(dbInventory) {
          res.json(dbInventory);
        }).catch(function(error) {
          res.json({ error: error });
        });
      });

      app.get('/api/watson', function(req, res) {
        db.Inventory.findAll({})
        .then(function(dbInventory) {
          res.json(dbInventory);
        }).catch(function(error) {
          res.json({ error: error });
        });
      });
  
        app.post('/api/watson', function(req, res) {
          db.Inventory.create(req.body).then(function(dbInventory) {
            res.json(dbInventory);
          }).catch(function(error) {
            res.json({ error: error });
          });
        });

}  