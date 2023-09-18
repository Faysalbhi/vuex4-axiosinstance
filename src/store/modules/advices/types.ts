export type adviceState = {
    list: Array<{}>,
    paginationMeta: object,
    details: object,
    isLoading: boolean,
    isSubmitting: boolean,
    isRequestSuccessful: boolean|null
    requiredDataToCreate: object,
    createAdvice: object,
    requiredDataToEdit: object,
    editAdvice: object,
    fromValidationErrors: object,
};