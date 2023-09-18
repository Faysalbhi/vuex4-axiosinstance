import type { profileState } from './types';

export default {
    
    
    setFromValidationErrors(state: profileState, errors: object) {
        state.fromValidationErrors = errors;
    },
    setIsRequestSuccessful(state: profileState, status: boolean) {
        state.isRequestSuccessful = status;
    },
    setGeneralErrorMessage(state: profileState, error: string) {
        state.generalErrorMessage = error;
    },
    setIsLoading(state: profileState, status: boolean) {
        state.isLoading = status;
    },
};