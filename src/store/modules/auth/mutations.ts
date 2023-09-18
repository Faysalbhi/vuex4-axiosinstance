import type { authState } from './types';

export default {
    setUser(state: authState, data: object) {
        state.token = data.token;
        state.userId = data.userId;
        state.userProfileId = data.userProfileId;
        state.userPhone = data.userPhone;
        state.userRole = data.userRole;
        state.userActiveBranchId = data.userActiveBranchId;
        state.userHospitalId = data.userHospitalId;
        state.didAutoLogout = false;
    },
    setAutoLogout(state: authState) {
        state.didAutoLogout = true;
    },
    setGeneralErrorMessage(state: authState, error: string) {
        state.generalErrorMessage = error;
    },
    setFromValidationErrors(state: authState, errors: object) {
        state.fromValidationErrors = errors;
    },
    setIsRequestSuccessful(state: authState, status: boolean) {
        state.isRequestSuccessful = status;
    },
    setIsRegistrationSuccessful(state: authState, status: boolean) {
        state.isRegistrationSuccessful = status;
    }
};