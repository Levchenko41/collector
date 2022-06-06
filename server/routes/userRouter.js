const {Router} = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const {User} = require("../models/models");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/authAll", userController.getAll);
router.get("/auth/:id", async (req, res) => {
  const {id} = req.params;
  const user = await User.findOne({where: {id}});
  return res.json(user);
});
router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params;
  const deleteUser = await User.findOne({where: {id}});
  if (deleteUser) {
    const us = await User.destroy({where: {id}});
    return res.json({message: "User delete"});
  } else {
    return res.status(404).json({message: "User not found"});
  }
});
router.put("/update/:id", async (req, res) => {
  const {id} = req.params;
  const updateUser = await User.findOne({where: {id}});
  
  if (updateUser) {
    const {name, lastName, email,  role} = req.body;
    const repeatEmail = await User.findOne({where: {email}});
    if(repeatEmail){
      return res
      .status(400)
      .json({message: "User with this email already exists"});
    }
    const us = await User.update({name, lastName, role, email}, {where: {id}});
    const user = await User.findOne({where: {id}});
    return res.json(user);
  
  } else {
    return res.status(404).json({message: "User not found"});
  }
});
module.exports = router;
