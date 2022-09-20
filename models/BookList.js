const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class BookList extends Model {}

BookList.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        books: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "booklist",
      }
);

module.exports = BookList;