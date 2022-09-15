import { createSelector } from "reselect";
//reselect can save the elder value of the data in the reducer if there is no changes
//the concept is about memorize the values
const selectCategoryReducer = (state) => state.categories;
//input/ouput
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    console.log(
      "🚀 ~ file: category.selector.js ~ line 9 ~ categoriesSlice",
      categoriesSlice
    );
    return categoriesSlice.categories;
  }
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    console.log(
      "🚀 ~ file: category.selector.js ~ line 13 ~ categories",
      categories
    );
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
