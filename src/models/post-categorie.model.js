/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const PostCategorieSchema = (sequelize, DataTypes) => {
  const PostCategorieTable = sequelize.define(
    'post_categorie',
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

  PostCategorieTable.associate = ({Categorie, BlogPost}) => {
    Categorie.belongsToMany(BlogPost, {
      as: 'modules',
      through: PostCategorieTable,
      foreignKey: 'idCourse',
      otherKey: 'idModule',
    });

    BlogPost.belongsToMany(Categorie, {
      as: 'courses',
      through: PostCategorieTable,
      foreignKey: 'idModule',
      otherKey: 'idCourse',
    });
  };
  return PostCategorieTable;
};

module.exports = PostCategorieSchema;
