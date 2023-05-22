/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define(
    'PostCategory',
    {
      postId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories',
    },
  );

  PostCategorieTable.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'modules',
      through: PostCategorieTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    BlogPost.belongsToMany(Category, {
      as: 'categorys',
      through: PostCategorieTable,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return PostCategorieTable;
};

module.exports = PostCategorieSchema;
