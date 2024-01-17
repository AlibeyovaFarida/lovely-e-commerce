import {instance} from './index'

export const getFilteredProducts = async (
  pageNum,
  category,
  selectedSubCategories,
  sort,
  searchProduct
) => {
  console.log(searchProduct);
  const response = await instance.get(
    `/products?${
      sort ? `sort[0]=newprice:${sort}` : `sort[0]=title:asc`
    }&[filters][title][$contains]=${searchProduct.toUpperCase()}&pagination[page]=${pageNum}&pagination[pageSize]=12&[filters][categories][title][$contains]=${category}${selectedSubCategories.map(
      (sb) => `&[filters][subcategories][title][$contains]=${sb}&`
    )}&populate=*`
  );
  return response;
};