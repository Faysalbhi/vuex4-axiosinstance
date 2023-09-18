import type { profileState } from './types';

export default {
  fromValidationErrors(state: profileState): profileState["fromValidationErrors"] {
    return state.fromValidationErrors;
  },
  isRequestSuccessful(state: profileState): profileState["isRequestSuccessful"] {
    return state.isRequestSuccessful;
  },
  generalErrorMessage(state: profileState): profileState["generalErrorMessage"] {
    return state.generalErrorMessage;
  },

  isLoading: (state: profileState): profileState["isLoading"] => state.isLoading,
  
  isSubmitting: (state: profileState): profileState["isSubmitting"] => state.isSubmitting,
};
