const { BlogPost, Category, PostCategory } = require('../models');

const findPost = async () => BlogPost.findAll({ order: [['id', 'DESC']], limit: 1 });

const createBlogPost = async (userId, {
    title, content, categoryIds,
}) => {
    const category = await Category.findAll();
    const filterCategoryByNum = category.map((cat) => cat.dataValues.id);
    if (!filterCategoryByNum.every((number) => categoryIds.includes(number))) {
        return ({ status: 400, message: 'one or more "categoryIds" not found' });
    }
    await BlogPost.create(
            { title, content, userId },
            );
    const newPost = await findPost();
    console.log(newPost);
    await categoryIds.map(async (categoryId) => PostCategory.create({ categoryId,
        postId: newPost[0].dataValues.id }));
    return newPost;
};

module.exports = {
    createBlogPost,
};
