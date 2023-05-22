const BlogPost = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { data } = req.payload;
    if (!title || !content || !categoryIds) {
        return res.status(400).json(
            {
                message: 'Some required fields are missing',
              },
          );
    }
    const newPost = await BlogPost.createBlogPost(data.id, req.body);
    if (newPost.status) {
        return res.status(newPost.status).json(
            {
                message: newPost.message },
          );
    }
    return res.status(201).json(newPost[0]);
};

module.exports = {
    createBlogPost,
};
