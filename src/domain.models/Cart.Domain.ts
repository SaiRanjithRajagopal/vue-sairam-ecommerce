export interface Cart {
  id: number;
  userId: number;
  date: string;
  products?: ProductsEntity[] | null;
}

export interface ProductsEntity {
  productId: number;
  quantity: number;
}
