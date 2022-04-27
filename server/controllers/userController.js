const {User} = require("../models/models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const generateJwt = (id, email, role) => {
  return jwt.sign({id, email, role}, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res) {
    const {name, lastName, email, password, role} = req.body;

    if (!email || !password) {
      return res.status(404).json({message: "Incorrect email or password"});
    }
    const candidate = await User.findOne({
      where: {
        email,
      },
    });
    if (candidate) {
      return res
        .status(400)
        .json({message: "User with this email already exists"});
    }
    const hasPassword = await bcrypt.hash(password, 5);

    const user = await User.create({
      name,
      lastName,
      email,
      password: hasPassword,
      role,
    });
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({token});
  }

  async login(req, res) {
    const {email, password} = req.body;
    const user = await User.findOne({where: {email}});
    if (!user) {
      return res.status(500).json({message: "User is not found"});
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return res.status(500).json({message: "Wrong password specified"});
    }
    const token = generateJwt(user.id, user.email, user.role);
    return res.json({token});
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
  }
  async getAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}
module.exports = new UserController();
