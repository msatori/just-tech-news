const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   user_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       references: {
           model: 'user',
           key: 'id'
       }
    },
    post_id: {
        type: Sequelize.INTEGER,
       allowNull: false,
       references: {
           model: 'post',
           key: 'id'
       }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote'
  }
);

module.exports = Vote;