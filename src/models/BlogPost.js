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
    updated: DataTypes.DATE,
    published: DataTypes.DATE,
  },
  {
    timestamps: true,
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