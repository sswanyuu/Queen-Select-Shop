import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (categories) =>
  //return back the payload of categories
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
