// we'll need axios
import axios from "axios";

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHAR_START = "CHAR_START";
export const CHAR_SUCCESS = "CHAR_SUCCESS";
export const CHAR_FAILED = "CHAR_FAILED";

// our action creator will be a function that returns a function

export const getChar = () => dispatch => {
    dispatch({ type: CHAR_START })

    axios.get("https://swapi.co/api/people/")
    .then((res)=> { 
      dispatch({ type: CHAR_SUCCESS, payload: res.data.results})
    })
    .catch((err)=> {
      dispatch({ type: CHAR_FAILED, payload: err })
    })
  }

// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
