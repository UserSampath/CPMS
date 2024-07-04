import { CarPark } from "../models/carPark.model.js"
import sequelize from "../config/db.connection.js"

const carParkRepo = {
    create: async ({ address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted }) => {
        try {
            await sequelize.sync();
            const result = await CarPark.create({ address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted });
            return result;
        } catch (error) {
            throw error;
        }
    },

    getAll: async () => {
        try {
            const result = await CarPark.findAll({
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    getById: async ({ id }) => {
        try {
            const result = await CarPark.findOne({
                where: {
                    id
                },
            });
            return result;
        } catch (error) {
            throw error;
        }
    },
    update: async ({ id, address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted }) => {
        try {
            const result = await CarPark.update({
                address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted
            }, { where: { id } });
            if (result > 0) {
                const updatedCarPark = await CarPark.findByPk(id);
                return updatedCarPark;
            }
        } catch (error) {
            throw error;
        }
    },

    deleteById: async ({ id }) => {
        try {
            const result = await CarPark.destroy({
                where: {
                    id
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    },
}
export default carParkRepo;