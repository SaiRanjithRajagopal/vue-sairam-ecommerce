import { Products } from "@/domain.models/Product.Domain";
import { useProductStore } from "@/store/Product.State";
import {
  GetAllProducts_Service,
  GetSingleProducts_Service,
} from "@/api_service/products_service";

export class ProductDomainEvents {
  product: Products | null = null;
  productStore = useProductStore();

  async GetProduct_DomainEvents(): Promise<Products[]> {
    //fetch products
    const products = await GetAllProducts_Service();

    //update the product store
    this.productStore.updateProductStore(products);

    //return the product state
    return await this.GetAllProducts_FromStore();
  }

  async GetAllProducts_FromStore(): Promise<Products[]> {
    //Get the products from state/store
    return this.productStore.getAllProducts;
  }

  async GetSingleProducts_FromStore(): Promise<Products | null> {
    //Get the products from state/store
    return this.productStore.getSingleProducts;
  }

  async GetSingleProduct_DomainEvents(
    productId: string | string[]
  ): Promise<Products | null> {
    //Get the products from state/store
    const product = await GetSingleProducts_Service(productId);

    this.productStore.updateSingleProductStore(product);

    //return the product state
    return await this.GetSingleProducts_FromStore();
  }
}
