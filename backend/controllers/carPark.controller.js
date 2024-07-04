import carParkService from "../services/carPark.services.js";

const carParkController = {
    create: async (req, res) => {
        try {
            const { address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted } = req.body;
            const result = await carParkService.create({ address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted });
            if (result.status) {
                res.status(200).json({
                    response_code: 200,
                    result
                });
            } else {
                res.status(400).json({
                    response_code: 400,
                    result
                });
            }
        } catch (error) {
            res.status(500).json({
                response_code: 500,
                status: false,
                error: error.message
            });
        }
    },


    getAll: async (req, res) => {
        try {

            const result = await carParkService.getAll();
            if (result.status) {
                res.status(200).json({
                    response_code: 200,
                    success: true, result
                });
            } else {
                res.status(400).json({
                    response_code: 400,
                    result
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                response_code: 500,
                status: false,
                success: false, message: error.message
            });
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        try {
            const result = await carParkService.getById({ id });
            if (result.status) {
                res.status(200).json({
                    response_code: 200,
                    result
                });
            } else {
                res.status(400).json({
                    response_code: 400,
                    result
                });
            }

        } catch (error) {
            console.error(error);
            res.status(400).json({
                response_code: 400,
                success: false, message: error.message
            });
        }


    },
    update: async (req, res) => {
        const { id, address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted } = req.body;
        try {
            const result = await carParkService.update({ id, address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted });
            if (result.status) {
                res.status(200).json({
                    response_code: 200,
                    result
                });
            } else {
                res.status(400).json({
                    response_code: 400,
                    result
                });
            }
        } catch (error) {
            res.status(500).json({
                response_code: 500,
                status: false,
                error: error.message
            });
        }
    },

    deleteById: async (req, res) => {
        const id = req.params.id;

        try {
            const result = await carParkService.deleteById({ id });

            if (result.status) {
                res.status(200).json({
                    response_code: 200,
                    success: true,
                });

            } else {
                res.status(400).json({
                    response_code: 404,
                    success: false,
                });

            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                response_code: 500,
                success: false, message: error.message,
            });
        }
    }
}

export default carParkController;