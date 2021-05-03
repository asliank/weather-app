import * as actions from "./ActionType";

const initialSate = {
  getData: [],
  getCaptialData: [],
  loading: false,
  error: null,
};
export default function reducer(state = initialSate, action) {
  switch (action.type) {
    case actions.GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_SUCCESS:
      return {
        ...state,
        getData: action.payload,
        loading: false,
      };
    case actions.GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actions.GET_CW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_CW_SUCCESS:
      return {
        ...state,
        getCaptialData: action.payload,
        loading: false,
      };
    case actions.GET_CW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
