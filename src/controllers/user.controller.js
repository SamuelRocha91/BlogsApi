const userService = require('../services/user.service');
const { createToken } = require('../auth/authfunctions');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);

    return res.status(201).json(newUser);
};

const findUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: 'Some required fields are missing',
          });
    }
    const user = await userService.getUserByEmail(email, password);
    console.log(user);
    if (!user) {
        return res.status(400).json({
            message: 'Invalid fields',
          });
    }
    const { password: _password, ...userWithoutPassword } = user.dataValues;
    const token = createToken(userWithoutPassword);
    res.status(200).json({ token });
};

const getUser = async (req, res) => {
    const allUser = await userService.getUser();

    return res.status(201).json(allUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const isUpdated = await userService.updateUser(id, req.body);

  if (!isUpdated) {
    return res.status(404).json({ message: 'error' });
  }

  return res.status(200).json({ message: 'atualizado com sucesso' });
};

const removeUser = async (req, res) => {
    const { id } = req.params;
    const isRemoved = await userService.removeUser(id);

    if (!isRemoved) {
        return res.status(404).json({ message: 'error' });
    }
    return res.status(200).json({ message: 'removido com sucesso' });
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    removeUser,
    findUser,
};
