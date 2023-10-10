import {client} from "../utils/fetchClient";

export const getCategoryProducts = (limit, category) => {
    return client.get(`products/category/${category} clothing?limit=${limit}`);
};