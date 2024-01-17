import { instance } from "./index";

export const getBestsellerProducts = async () => {
  const response = await instance.get("/products?populate=*&[filters][type][$eq]=best_seller");
  return response.data.data;
};
