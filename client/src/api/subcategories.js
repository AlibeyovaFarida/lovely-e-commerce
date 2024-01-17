import { instance } from "./index";

export const getSubCategories = async (category) => {
  const response = await instance.get(
    `/subcategories?&filters[categories][title][$contains]=${category}&populate=*`
  );
  return response;
};