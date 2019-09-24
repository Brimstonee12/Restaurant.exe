const express = require('express');
const {customers} = require('./serverData')
const app = express();
const router = express.Router();


//GET ALL
router.get('/', (req, res) => {
  res.json(customers);
});


//GET ONE
router.get('/:id', (req, res) => {
  const found = customers.some(cuz => cuz.id === parseInt(req.params.id));

  if (found) {
    res.json(customers.filter(cuz => cuz.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});


//UPDATE
router.put('/:id', (req,res)=>{
  const found = customers.some(cuz => cuz.id === parseInt(req.params.id))
  if (found){
    const updMember = req.body;
    customers.forEach(cuz => {
      if(cuz.id === parseInt(req.params.id)){
        cuz.available = updMember.available ? updMember.available : cuz.available;
        res.json({msg: "Member Updated", cuz})
      }
    })
  } else {
    res.status(400).json({msg:"Member do not exist"})
  }
})



module.exports = router;
