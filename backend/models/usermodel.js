import sequelize from "../config/db.connection.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otp: {
            type: DataTypes.STRING,
        },
        otpExpiryTime: {
            type: DataTypes.DATE,
        },
        zipCode:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        utility:{
            type: DataTypes.STRING,
            allowNull: false, 
        },
        credits:{
            type: DataTypes.INTEGER,
            allowNull: true, 
        }
    },
    {
        tableName: "users",
    }
);

