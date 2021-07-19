import { types } from "../Types/chat";

let initialState = {

};

const chatReducer = (state = initialState, action) => {

  switch (action.type) {
    // AllChats
    case types.GETCHAT_REQUEST:
      return {
        ...state,
        loadingChat: true,
      };
    case types.GETCHAT_SUCCESS:
      return {
        ...state,
        allChats: action.payload,
        loadingChat: false,
      };
    case types.GETCHAT_FAILURE:
      return {
        ...state,
        loadingChat: false,
      };


    //   UserConversation
    case types.GETCONVERSATION_REQUEST:
      return {
        ...state,
        loadingConversation: true,
      };
    case types.GETCONVERSATION_SUCCESS:
      return {
        ...state,
        userConversation: action.payload,
        loadingConversation: false,
      };
    case types.GETCONVERSATION_FAILURE:
      return {
        ...state,
        loadingConversation: false,
      };

    default: {
      return { ...state };
    }
  }

}

export default chatReducer;