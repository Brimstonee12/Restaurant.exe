const express = require('express');
const {ReservedTables} = require('./serverData')
const app = express();
const router = express.Router();
const uuid = require('uuid')



//GET ALL RESERVE
router.get('/', (req, res) => {
  res.json(ReservedTables);
});


//RESERVE CREATE
router.post('/', (req,res) =>{
  const newReserve = {
    id: uuid.v4(),
    Tables: req.body.Tables,
    Email: req.body.Email,
    Comment:req.body.Comment
  }
  if(!newReserve.Tables || !newReserve.Email){
    return res.status(400).json({msg: 'Error, Tables and Email are required!'})
  }

  ReservedTables.push(newReserve)

  res.redirect('/')
})

//RESERVE  DELETE
router.delete('/:id', (req, res) => {
  const found = ReservedTables.some(rev => rev.id === parseInt(req.params.id));

  if (found) {
    res.json({
      msg: 'Member deleted',
      members: ReservedTables.filter(rev => rev.id !== parseInt(req.params.id))
    })
  } else {
    res.status(400).json({ msg: `Reserve number: ${req.params.id} was deleted`})
}
});

module.exports = router;
