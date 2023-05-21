/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const UserSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  },
);
userTable.associate = (models) => {
  userTable.hasMany(models.BlogPost, {
    foreignKey: 'userId',
    as: 'posts',
  });
}
  return userTable;
}

module.exports = UserSchema;
