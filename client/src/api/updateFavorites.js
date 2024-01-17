
import { privateInstance } from "./index";
export const updateFavorites = async (id,status) => {
    const response = await privateInstance.put(
      `/api/products/${id}?populate=*`,{
        "data": {
            "isWish": !status
        }
      }
    );
    return response.data;
}
