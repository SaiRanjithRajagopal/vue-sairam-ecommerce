import axios from "axios";
import { Products } from "@/domain.models/Product.Domain";

export const sairamApi = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export async function GetAllProducts_Service(): Promise<Products[]> {
  const response = await sairamApi.get("/products");
  return response.data as Products[];
}

export async function GetSingleProducts_Service(
  idReceived: string | string[]
): Promise<Products> {
  const response = await sairamApi.get(
    `https://fakestoreapi.com/products/${idReceived[3]}`
  );
  console.log("response");
  console.log(response);
  return response.data as Products;
}
