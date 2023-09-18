import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import type { adviceState } from './types';

export default {
    namespaced: true,
    state() : adviceState {
        return {
            list: [],
            paginationMeta: {},
            details: {},
            isLoading: false,
            isSubmitting: false,
            isRequestSuccessful: null,
            requiredDataToCreate: {},
            createAdvice: {},
            requiredDataToEdit: {},
            editAdvice: {},
            fromValidationErrors: {},
        };
    },
    mutations,
    actions,
    getters
};