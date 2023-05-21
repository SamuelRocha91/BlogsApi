const categoryService = require('../services/category.service');

const createCategory = async (req, res) => { 
    const { name } = req.body;
    if (!name) {
        return res.status(400).json(
            {
                message: '"name" is required',
              },
          );
    }
    const user = await categoryService.createCategory(req.body);
    console.log(user);
    res.status(201).json(user);
};

const findCategories = async (req, res) => {
    const categories = await categoryService.findAllCategory();
    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    findCategories,
};