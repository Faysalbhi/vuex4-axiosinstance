import type { authState } from './types';

export default {
  token(state: authState): authState["token"] {
    return state.token;
  },
  isAuthenticated(state: authState): boolean {
    return !!state.token;
  },
  userId(state: authState): authState["userId"] {
    return state.userId;
  },
  userProfileId(state: authState): authState["userProfileId"] {
    return state.userProfileId;
  },
  userPhone(state: authState): authState["userPhone"] {
    return state.userPhone;
  },
  userName(state: authState): authState["userName"] {
    return state.userName;
  },
  userRole(state: authState): authState["userRole"] {
    return state.userRole;
  },
  userActiveBranchId(state: authState): authState["userActiveBranchId"] {
    return state.userActiveBranchId;
  },
  activeStatus(state: authState): authState["activeStatus"] {
    return state.activeStatus;
  },
  userHospitalId(state: authState): authState["userHospitalId"] {
    return state.userHospitalId;
  },
  didAutoLogout(state: authState): authState["didAutoLogout"] {
    return state.didAutoLogout;
  },
  fromValidationErrors(state: authState): authState["fromValidationErrors"] {
    return state.fromValidationErrors;
  },
  generalErrorMessage(state: authState): authState["generalErrorMessage"] {
    return state.generalErrorMessage;
  },
  isRequestSuccessful(state: authState): authState["isRequestSuccessful"] {
    return state.isRequestSuccessful;
  },
  isRegistrationSuccessful(state: authState): authState["isRegistrationSuccessful"] {
    return state.isRegistrationSuccessful;
  },
};
