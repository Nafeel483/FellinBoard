import { types } from "../Types/profile";

let initialState = {

};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    // Register
    case types.GETPROFILE_REQUEST:
      return {
        ...state,
        loadingProfile: true,
      };
    case types.GETPROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        loadingProfile: false,
      };
    case types.GETPROFILE_FAILURE:
      return {
        ...state,
        loadingProfile: false,
      };

    // UpdateProfile
    case types.UPDATEPROFILE_REQUEST:
      return {
        ...state,
        loadingUpdateProfile: true,
      };
    case types.UPDATEPROFILE_SUCCESS:
      return {
        ...state,
        UpdateProfile: action.payload,
        loadingUpdateProfile: false,
      };
    case types.UPDATEPROFILE_FAILURE:
      return {
        ...state,
        loadingUpdateProfile: false,
      };


    default: {
      return { ...state };
    }
  }

}

export default profileReducer;