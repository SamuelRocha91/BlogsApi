const { Category } = require('../models');

const createCategory = async ({ name }) => 
Category.create({ name });

module.exports = {
    createCategory,
};
