<template>
  <div class="card">
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="title" header="Title" :sortable="true"></Column>
      <Column
        field="description"
        header="Description"
        :sortable="true"
      ></Column>
      <Column field="category" header="Category" :sortable="true"></Column>
      <Column field="price" header="Price" :sortable="true">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
//import { Products } from "@/domain.models/Product.Domain";
import { ProductDomainEvents } from "@/domain.events/Products.DomainEvents";

@Options({
  components: {},
})
export default class ProductList extends Vue {
  products: unknown[] | null = null;
  productService!: ProductDomainEvents;
  tempProduct: unknown | null = null;

  async created(): Promise<void> {
    this.productService = new ProductDomainEvents();
  }
  async mounted(): Promise<void> {
    this.products = await this.productService.GetProduct_DomainEvents();
    //const arrayOfObj = Object.values(obj);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
}
</script>

<style lang="scss"></style>
