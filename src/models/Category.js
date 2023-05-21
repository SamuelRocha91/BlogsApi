/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const CategorieSchema = (sequelize, DataTypes) => {
  const categorieTable = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
  },
    name: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'categories',
  },
);

  return categorieTable;
}

module.exports = CategorieSchema;
