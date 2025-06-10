import { CATEGORIES_ACTION_TYPES, Category } from './category.types'
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './category.action'
import { AnyAction } from 'redux'

export type CategoriesState = {
  readonly categories: Category[]
  readonly isLoading: boolean
  readonly error: Error | null
}
export const CATEGORIES_INTIAL_STATE: CategoriesState = {
  categories: [],
  //track if the data is loading or not
  isLoading: false,
  //asychronous fetching, to know if there is any error
  error: null,
}

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  //action can be anyAction
  action: AnyAction,
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true }
  }
  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      categories: action.payload,
      isLoading: false,
    }
  }
  if (fetchCategoriesFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    }
  }
  return state
}
