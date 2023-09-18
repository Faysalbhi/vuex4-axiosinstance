import type { adviceState } from './types';

export default {
  list: (state: adviceState): adviceState["list"] => state.list,
  paginationMeta: (state: adviceState): adviceState["paginationMeta"] => state.paginationMeta,
  details: (state: adviceState): adviceState["details"] => state.details,
  isLoading: (state: adviceState): adviceState["isLoading"] => state.isLoading,
  isSubmitting: (state: adviceState): adviceState["isSubmitting"] => state.isSubmitting,
  isRequestSuccessful: (state: adviceState): adviceState["isRequestSuccessful"] => state.isRequestSuccessful,
  requiredDataToCreate: (state: adviceState): adviceState["requiredDataToCreate"] => state.requiredDataToCreate,
  createAdvice: (state: adviceState): adviceState["createAdvice"] => state.createAdvice,
  requiredDataToEdit: (state: adviceState): adviceState["requiredDataToEdit"] => state.requiredDataToEdit,
  editAdvice: (state: adviceState): adviceState["editAdvice"] => state.editAdvice,
  fromValidationErrors: (state: adviceState): adviceState["fromValidationErrors"] => state.fromValidationErrors,
};