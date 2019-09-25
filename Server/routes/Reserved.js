const router = require('express').Router();
let Reserved_Models = require('../models/Reserved.model');


//GET ALL RESERVED
router.route('/').get((req, res) => {
  Reserved_Models.find()
    .then(reserved => res.json(reserved))
    .catch(err => res.status(400).json('Error: ' + err));
});

//ADD RESERVED
router.route('/add').post((req, res) => {
  const Email = req.body.Email;
  const Tables = Array(req.body.Tables);
  const Comment = req.body.Comment;

  const newReserve = new Reserved_Models({
    Tables,
    Email,
    Comment,
  });

  newReserve.save()
  .then(() => res.json('New Reserve added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//GET SINGLE RESERVE
router.route('/:id').get((req, res) => {
  Reserved_Models.findById(req.params.id)
    .then(reserved => res.json(reserved))
    .catch(err => res.status(400).json('Error: ' + err));
});

//DELETE ONE RESERVE
router.route('/:id').delete((req, res) => {
  Reserved_Models.findByIdAndDelete(req.params.id)
    .then(() => res.json('Reserved Table deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
