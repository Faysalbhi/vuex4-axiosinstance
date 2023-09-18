import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import type { profileState } from './types';

export default {
    namespaced: true,
    state() : profileState {
        return {
            fromValidationErrors: {},
            isRequestSuccessful: null,
            generalErrorMessage: null,
            isLoading: false,
            isSubmitting: false,
        };
    },
    mutations,
    actions,
    getters,
};