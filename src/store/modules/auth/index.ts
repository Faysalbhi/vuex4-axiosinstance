import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import type { authState } from './types';

export default {
    namespaced: true,
    state():authState {
        return {
            token: null,
            userId: null,
            userProfileId: null,
            userPhone: null,
            userName: null,
            userRole: null,
            userActiveBranchId: null,
            userHospitalId: null,
            fromValidationErrors: {},
            generalErrorMessage: null,
            didAutoLogout: false,
            isRequestSuccessful: null,
            isRegistrationSuccessful: null,
            activeStatus:true,
        };
    },
    mutations,
    actions,
    getters
};