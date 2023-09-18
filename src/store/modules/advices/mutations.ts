import type { adviceState } from './types';

export default {
    setList(state: adviceState, advices: Array<{}>) {
        state.list = advices;
    },
    setPaginationMeta(state: adviceState, paginationMeta: object) {
        state.paginationMeta = paginationMeta;
    },
    setDetails(state: adviceState, advice: object) {
        state.details = advice;
    },
    setIsLoading(state: adviceState, status: boolean) {
        state.isLoading = status;
    },
    setIsSubmitting(state: adviceState, status: boolean) {
        state.isSubmitting = status;
    },
    setIsRequestSuccessful(state: adviceState, status: boolean) {
        state.isRequestSuccessful = status;
    },
    setRequiredDataToCreate(state: adviceState, data: object) {
        state.requiredDataToCreate = data;
    },
    setCreateAdvice(state: adviceState, advice: object) {
        state.details = advice;
    },
    setEditAdvice(state: adviceState, advice: object) {
        state.details = advice;
    },
    setRequiredDataToEdit(state: adviceState, data: object) {
        state.requiredDataToEdit = data;
    },
    setFromValidationErrors(state: adviceState, errors: object) {
        state.fromValidationErrors = errors;
    }
};