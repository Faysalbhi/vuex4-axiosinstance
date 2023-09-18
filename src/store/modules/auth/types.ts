export type authState = {
    token: string|null,
    userId: string | null,
    userProfileId: string | null, 
    userPhone: string|null,
    userName: string|null,
    userRole: string|null,
    userActiveBranchId: string|null,
    userHospitalId: string|null,
    didAutoLogout: boolean
    fromValidationErrors: object,
    generalErrorMessage: string|null,
    isRequestSuccessful: boolean|null
    isRegistrationSuccessful: boolean|null
    activeStatus: boolean|null
};