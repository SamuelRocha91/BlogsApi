const { Category } = require('../models');

const createCategory = async ({ name }) => 
Category.create({ name });

const findAllCategory = async () => Category.findAll();

module.exports = {
    createCategory,
    findAllCategory,
};
