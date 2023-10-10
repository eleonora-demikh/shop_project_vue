import {client} from "./fetchClient";

export const getCategoryProducts = (limit, category) => {
    return client.get(`products/category/${category} clothing?limit=${limit}`);
};