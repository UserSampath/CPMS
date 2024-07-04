import carParkRepo from "../repositories/carPark.repo.js";

const carParkService = {
    create: async ({ address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted }) => {
        try {

            const result = await carParkRepo.create({ address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted });
            if (result) {
                return { status: true, message: "Created successfully", result }
            } else {
                return { status: false, message: "Create failed!" }

            }
        } catch (error) {
            throw error;
        }

    },

    getAll: async () => {
        try {
            const result = await carParkRepo.getAll();
            if (result) {
                return { status: true, message: "Get successfully", result }
            } else {
                return { status: false, message: "Get failed" }
            }
        } catch (error) {
            throw error;
        }
    },
    getById: async ({ id }) => {
        try {
            const meeting = await carParkRepo.getById({ id });
            if (meeting) {
                return {
                    status: true,
                    message: "Get successfully",
                    result: meeting,
                }
            } else {
                return { status: false, message: "Getting failed!" }
            }
        } catch (error) {
            throw error;
        }
    },
    update: async ({ id, address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted }) => {
        try {
            const result = await carParkRepo.update({ id, address, latitude, longitude, name_of_the_park, image_url, number_of_spots, spot_size, price, facilities, special_notes, registration_certificate_no, is_Accepted });
            if (result) {
                return {
                    status: true,
                    message: "Gift updated successfully",
                    result
                }
            } else {
                return {
                    status: false,
                    message: "Gift not updated",
                }
            }
        } catch (error) {
            throw error;
        }
    },
    deleteById: async ({ id }) => {
        try {
            const result = await carParkRepo.deleteById({ id });
            if (result > 0) {
                return {
                    status: true,
                    message: "Delete successfully",
                }
            } else {
                return {
                    status: false,
                    message: "Delete failed",
                }
            }
                
            
        } catch (error) {
            throw error;
        }
    },
}
export default carParkService;