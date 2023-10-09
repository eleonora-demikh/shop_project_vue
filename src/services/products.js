import { client } from "../utils/fetchClient";

export const getWomenClothes = (limit) => {
  return client.get(`products/category/women's clothing?limit=${limit}`);
};

export const getMenClothes = (limit) => {
  return client.get(`products/category/men's clothing?limit=${limit}`);
};


