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
      this.$patch({
        products: { ...receivedProducts },
        count: receivedProducts.length,
      });
    },
    updateSingleProductStore(receivedProducts: Products): void {
      this.$patch({ singleProduct: { ...receivedProducts } });
    },
  },
});
