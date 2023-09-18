import axiosInstance from "@/axios";
import Swal from 'sweetalert2';
import router from "@/router";

export default {
    async getAdvices(context, queryStringObject = {}) {
        context.commit('setIsLoading', true);

        const baseUrl = import.meta.env.VITE_BASE_URL;

        const queryString = new URLSearchParams(queryStringObject).toString();

        const url = `${baseUrl}/advices?${queryString}`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.get(url, config)
            .then(function (response) {
                const advices = response.data.data;
                context.commit('setList', advices);
                context.commit('setPaginationMeta', response.data.meta);
                context.commit('setIsLoading', false);
            })
            .catch(function (error) {
                console.log('error');
                console.log(error);
            });
    },

    async getDependencyToCreate(context) {
        context.commit('setIsLoading', true);

        const url = `/advices/create`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.get(url, config)
            .then(function (response) {
                context.commit('setRequiredDataToCreate', response.data.data)
                context.commit('setIsLoading', false);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    async createAdvice(context, payload) {
        context.commit('setFromValidationErrors', {});

        context.commit('setIsSubmitting', true);

        context.commit('setCreateAdvice', payload);

        const url = `/advices`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.post(url, payload, config)
            .then(function (response) {
                context.commit('setCreateAdvice', {});
                context.commit('setIsSubmitting', false);

                Swal.fire({
                    text: "Create successfully",
                    icon: "success",
                    timer: 1000,
                });

                router.push({ name: "advice-list" });
            })
            .catch(function (error) {
                if (error.response) {
                    const errorResponse = error.response.data;
                    if (errorResponse.code === 422) {
                        context.commit('setFromValidationErrors', errorResponse.errors);

                        Swal.fire({
                            text: "Please check your submitted data.",
                            icon: "error",
                            timer: 1000,
                        });
                    }
                }
                context.commit('setIsSubmitting', false);
            });
    },

    async getAdvice(context, advice_id) {
        context.commit('setIsLoading', true);

        const url = `/advices/${advice_id}`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.get(url, config)
            .then(function (response) {
                const advice = response.data.data;
                context.commit('setDetails', advice);
            })
            .catch(function (error) {
                console.log(error);
            });
        context.commit('setIsLoading', false);
    },

    async getDependencyToEdit(context, advice_id) {
        context.commit('setIsLoading', true);

        context.commit('setIsRequestSuccessful', null);

        const url = `/advices/${advice_id}/edit`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.get(url, config)
            .then(function (response) {
                const data = response.data.data;
                context.commit('setDetails', data.advice);
                delete data.advice;
                context.commit('setRequiredDataToEdit', data)
                context.commit('setIsRequestSuccessful', true);
                context.commit('setIsLoading', false);
            })
            .catch(function (error) {
                console.log(error);
                context.commit('setIsRequestSuccessful', true);
            });
    },

    async editAdvice(context, payload) {
        context.commit('setFromValidationErrors', {});

        context.commit('setIsSubmitting', true);

        context.commit('setIsRequestSuccessful', null);

        context.commit('setEditAdvice', payload);

        const url = `/advices/${payload.id}`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        delete payload.id;

        await axiosInstance.put(url, payload, config)
            .then(function (response) {
                context.commit('setEditAdvice', {});
                context.commit('setIsSubmitting', false);
                context.commit('setDetails', response.data.data);
                context.commit('setIsRequestSuccessful', true);

                Swal.fire({
                    text: "Update successfully",
                    icon: "success",
                    timer: 1000,
                });
            })
            .catch(function (error) {
                if (error.response) {
                    const errorResponse = error.response.data;
                    if (errorResponse.code === 422) {
                        context.commit('setFromValidationErrors', errorResponse.errors);

                        Swal.fire({
                            text: "Please check your submitted data.",
                            icon: "error",
                            timer: 1000,
                        });
                    }
                }
                context.commit('setIsSubmitting', false);
                context.commit('setIsRequestSuccessful', false);
            });
    },

    async deleteAdvice(context, advice_id) {
        const url = `/advices/${advice_id}`;

        const token = context.rootGetters['auth/token'];

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        await axiosInstance.delete(url, config)
            .then(function (response) {
                context.dispatch('getAdvices');
                Swal.fire({
                    text: "Success, advice has been deleted.",
                    icon: "success",
                    timer: 1000,
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
};