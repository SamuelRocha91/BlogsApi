/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const BlogSchema = (sequelize, DataTypes) => {
  const postsTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
  },
);
postsTable.associate = (models) => {
  postsTable.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'posts',
  });
}
  return postsTable;
}

module.exports = BlogSchema;
