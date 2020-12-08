const { execArgv } = require('process');
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {}

//create the fields for Post
Post.init(
    {
        id: {
            type: Sequelize.INTEGER, 
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING, 
            allowNull: false,
            validate: {
                isUrl: true
            }
        },
        userId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

module.exports = Post;
