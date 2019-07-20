import /* we need our action types here*/ { CHAR_START, CHAR_SUCCESS, CHAR_FAILED} from "../actions"

const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  isLoading: false,
  errorMessage: "",
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {


    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case CHAR_START: {
      return{
        ...state, 
        isLoading: true,
        errorMessage: "",
      }
    }

    case CHAR_SUCCESS: {
      // const newData = action.payload
      return{
      ...state,
      isLoading: false,
      errorMessaage: "",
      }
    }

    case CHAR_FAILED: {
      return{
      ...state,
      errorMessage: action.payload,
      }
    }

    default:
      return state;
  }
};
