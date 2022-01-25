<template>
  <div class="container">
    <template v-for="(productEach, index) in products" :key="index"> </template>
    <DataTable
      :value="products"
      v-model:selection="selectedProduct1"
      selectionMode="single"
      dataKey="id"
      responsiveLayout="scroll"
    >
      <Column field="title" header="Title" :sortable="true"></Column>
      <Column field="price" header="Price" :sortable="true"></Column>
      <Column
        field="description"
        header="Description"
        :sortable="true"
      ></Column>
      <Column field="category" header="Category" :sortable="true"></Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Products } from "@/domain.models/Product.Domain";
import { ProductDomainEvents } from "@/domain.events/Products.DomainEvents";

@Options({
  components: {},
})
export default class ProductList extends Vue {
  products: Products[] | null = null;
  productService!: ProductDomainEvents;

  async created(): Promise<void> {
    this.productService = new ProductDomainEvents();
  }
  async mounted(): Promise<void> {
    this.products = await this.productService.GetProduct_DomainEvents();
  }
}
</script>

<style lang="scss"></style>
