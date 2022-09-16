import { CATEGORIES_ACTION_TYPES } from "./category.types";
export const CATEGORIES_INTIAL_STATE = {
  categories: [],
  //track if the data is loading or not
  isLoading: false,
  //asychronous fetching, to know if there is any error
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
