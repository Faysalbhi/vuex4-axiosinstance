import axiosInstance from "@/axios";
import axios from "axios";
import router from "@/router";

let timer;

export default {
    async login(context, payload) {
        context.commit('setGeneralErrorMessage', null);
        context.commit('setFromValidationErrors', {});

        const baseUrl = import.meta.env.VITE_BASE_URL;

        await axios.post(`${baseUrl}/authenticate`, payload)
            .then(function (response) {

                const data = response.data.data;

                const authUser = {
                    token: data.token,
                    userId: data.user.id,
                    userProfileId: data.user.profile_id,
                    userPhone: data.user.phone,
                    userEmail: data.user.email,
                    userRole: data.user.role,
                    userActiveBranchId: data.user.branch_id,
                    userHospitalId: data.user.hospital_id,
                };

                localStorage.setItem('user', JSON.stringify(authUser));
                context.commit('setGeneralErrorMessage', false);
                context.dispatch('tryLogin');
                payload.redirectToDashboard()
                return true;
            })
            .catch(function (error) {
                if (error.response) {
                    const errorResponse = error.response.data;
                    if (errorResponse.code === 422) {
                        context.commit('setFromValidationErrors', errorResponse.errors);

                    }

                    if (errorResponse.code === 401) {
                        context.commit('setGeneralErrorMessage', errorResponse.message);
                    }

                    if (errorResponse.code === 403) {
                        context.commit('setFromValidationErrors', errorResponse.errors);
                    }

                    context.commit('setIsRequestSuccessful', false);
                }

                return false;
            });

    },

    async registration(context, payload) {

        context.commit('setGeneralErrorMessage', null);
        context.commit('setFromValidationErrors', {});

        const baseUrl = import.meta.env.VITE_BASE_URL;

        await axios.post(`${baseUrl}/registration`, payload)
            .then(function (response) {    
                context.commit('setIsRegistrationSuccessful', true);          
                router.push({ name: "login" });
            }
            )
            .catch(function (error) {
                console.log(error.response);
                if (error.response) {
                    const errorResponse = error.response.data;
                    if (errorResponse.code === 422) {
                        context.commit('setFromValidationErrors', errorResponse.errors);
                        console.log(errorResponse.errors);
                    }

                    if (errorResponse.code === 401) {
                        context.commit('setFromValidationErrors', errorResponse.errors);
                    }

                    if (errorResponse.code === 403) {
                        context.commit('setFromValidationErrors', errorResponse.errors);
                    }

                    // context.commit('setIsRequestSuccessful', false);
                }

            });


    },

    tryLogin(context) {
        const user = localStorage.getItem('user');
        // const tokenExpiration = localStorage.getItem('tokenExpiration');

        // const expiresIn = +tokenExpiration - new Date().getTime();

        // if (expiresIn < 0) {
        //   return;
        // }

        // timer = setTimeout(function() {
        //   context.dispatch('autoLogout');
        // }, expiresIn);

        if (user) {
            context.commit('setUser', JSON.parse(user));
        }
    },

    async logout(context) {

        const token = context.getters.token;

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const data = {};

        await axiosInstance.post(`/logout`, data, config)
            .then(function (response) {
                localStorage.removeItem('user');
                // localStorage.removeItem('tokenExpiration');

                // clearTimeout(timer);

                context.commit('setUser', {
                    token: null,
                    userId: null,
                    userProfileId: null,
                    userPhone: null,
                    userRole: null,
                    userActiveBranchId: null,
                    userHospitalId: null,
                });

                router.push({ name: 'login' });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};