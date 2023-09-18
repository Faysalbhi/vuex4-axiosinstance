import axios from "@/axios";
// import Swal from 'sweetalert2';
import router from "@/router";


export default {
    async update(context, payload) {

        context.commit('setFromValidationErrors', {});
        const token = context.rootGetters['auth/token'];
        const id = payload.patient_id;
        // const id = payload.get('patient_id');
        const url = `/profile/update`;
        const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                    // "Content-Type": "multipart/form-data",
                    
            }
        };

 
        await axios.put(url, payload, config)

        .then(function (response) {
            Swal.fire({
            text: "Successfully updated ",
            icon: "success",
            timer: 1000,
            });

            return router.push({ name: "profile" });
        })
        .catch(function (error) {
            console.log(error);
            const errorResponse = error.response.data;
            if (errorResponse.code === 422) {
                context.commit('setFromValidationErrors', errorResponse.errors);

                console.log(errorResponse.errors);

            }

            if (errorResponse.code === 401) {
                context.commit('setFromValidationErrors', errorResponse.errors);
                console.log(errorResponse.errors);
            }
            if (errorResponse.code === 403) {
                context.commit('setFromValidationErrors', errorResponse.errors);
            }

            // context.commit('setIsRequestSuccessful', false);

        });
        


    },

    async passwordUpdate(context, payload) {

        context.commit('setFromValidationErrors', {});
        context.commit('setGeneralErrorMessage', null);

        const token = context.rootGetters['auth/token'];
        const url = `/profile/password/update`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
                // "Content-Type": "multipart/form-data",
                
        }
    };


        await axiosInstance.put(url, payload, config)

        .then(function (response) {
            Swal.fire({
            text: "Successfully updated ",
            icon: "success",
            timer: 1000,
            });

            context.commit('setFromValidationErrors', {});
            context.commit('setGeneralErrorMessage', null);

            return router.push({ name: "profile" });
        })
        .catch(function (error) {
            const errorResponse = error.response.data;
            if (errorResponse.code === 422) {
                context.commit('setFromValidationErrors', errorResponse.errors);


            }

            if (errorResponse.code === 401) {
                context.commit('setFromValidationErrors', errorResponse.errors);
            }

            if (errorResponse.code === 402) {
                context.commit('setGeneralErrorMessage', errorResponse.message);
                console.clear();
            }
            if (errorResponse.code === 403) {
                context.commit('setFromValidationErrors', errorResponse.errors);
            }


        });
    }
};