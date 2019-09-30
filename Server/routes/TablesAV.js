const router = require('express').Router();
let TablesAV_Models = require('../models/TablesAV.model');


//GET ALL TABLES
router.route('/get').get((req, res) => {
  TablesAV_Models.find()
    .then(tablesav => res.json(tablesav))
    .catch(err => res.status(400).json('Error: ' + err));
});

//ADD ONE TABLE
router.route('/add').post((req, res) => {
  const table1 = req.body.table1;
  const sits = req.body.sits;
  const available = req.body.available;

  const newTableAV = new TablesAV_Models({
      table1,
      sits,
      available,
    });

  newTableAV.save()
    .then(() => res.json('Table added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//UPDATE ONE TABLE
router.route('/update/:id').post((req, res) => {
  TablesAV_Models.findById(req.params.id)
    .then(tablesav => {
      tablesav.available = req.body.available;
      tablesav.save()
        .then(() => res.json('Table is updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
