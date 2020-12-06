const { Model, Datatypes, Sequelize, } = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model { }

//define table columns and configuration
User.init(
    {
        id: {
            //define id colu,n
            type: Sequelize.INTEGER,
            //make sure input is here
            allowNull: false,
            //instruct that this is the primary key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },

        //define username column
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        //define email column
       email: {
            type: Sequelize.STRING, 
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        //define password column
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                //validate that password is longer than 6 characters
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

        //pass in imported sequelize connection 
        sequelize,
        //do not automatically create timestamp fields for createdAt or updatedAt
        timestamps: false,
        //do not pluralize name of database table
        freezeTableName: true,
        //use underscores instead of camel case
        underscored: true,
        //make model name stay lowercase in db
        modelName: 'user'
    }
);

module.exports = User;