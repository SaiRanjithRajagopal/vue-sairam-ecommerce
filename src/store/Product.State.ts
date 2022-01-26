import { defineStore } from "pinia";
import { Products } from "@/domain.models/Product.Domain";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [] as Products[],
    singleProduct: null as Products | null,
    count: 0,
  }),
  getters: {
    getItemsCount(): number {
      return this.count;
    },
    getAllProducts(): Products[] {
      return this.products;
    },
    getSingleProducts(): Products | null {
      return this.singleProduct;
    },
  },
  actions: {
    updateProductStore(receivedProducts: Products[]): void {
      //Method1 - converting aryay to object of arrays
      // this.$patch({
      //   products: { ...receivedProducts },
      //   count: receivedProducts.length,
      // });

      //Method2
      // this.$patch({
      //   products: [...receivedProducts],
      //   count: receivedProducts.length,
      // });

      //Method3
      //this.products = Object.values(receivedProducts);

      //Method4
      this.products = receivedProducts;
    },
    updateSingleProductStore(receivedProducts: Products): void {
      // this.$patch({ singleProduct: { ...receivedProducts } });
      this.singleProduct = receivedProducts;
    },
  },
});
