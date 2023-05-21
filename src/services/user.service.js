const { User } = require('../models');

const createUser = async ({ displayName, email = null, password, image }) => 
User.create({ displayName, email, password, image });

const getUser = async () => User.findAll({ attributes: { exclude: ['password'] } });

const getUserByEmail = async (email, password) => User.findOne({
    where: {
       email,
       password,
    },
});

const updateUser = async (id, { displayName, email, password, image }) => {
    const [qtdUpdated] = await User.update(
        { displayName, email, password, image },
        { where: { id } },
    );
    return qtdUpdated > 0;
};

const removeUser = async (id) => {
    const qtdRemoved = await User.destroy({ where: { id } });

    return qtdRemoved > 0;
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    removeUser,
    getUserByEmail,
};