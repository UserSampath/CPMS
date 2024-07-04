import sequelize from "../config/db.connection.js";
import { DataTypes } from "sequelize";

export const CarPark = sequelize.define(
    "CarPark",
    {
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name_of_the_park: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
        },
        number_of_spots: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spot_size: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        facilities: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        special_notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registration_certificate_no: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_Accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

    },
    {
        tableName: "car_park",
        timestamps: true,
    }
);

