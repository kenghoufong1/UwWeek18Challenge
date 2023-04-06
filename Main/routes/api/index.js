const router = require('express').Router();
const Thoughtroutes = require('./thoughtroutes');
const Userroutes = require('./Userroutes');

router.use("/users",Userroutes)
router.use("/thoughts",Thoughtroutes)

module.exports = router;