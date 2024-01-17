import {instance} from './index'

export const getCategories = async () => {
    const response = await instance.get("/categories?populate=*");

    return response.data;
}
