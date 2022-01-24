<template>
  <div>
    <p v-html="htmlElement"></p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Rating } from "@/domain.models/Product.Domain";
@Options({
  components: {},
  props: {
    rating: { type: Object },
  },
})
export default class DisplayRatings extends Vue {
  rating: Rating | null = null;
  htmlElement: string | null = null;

  created(): void {
    this.htmlElement = this.DisplayRatings(
      this.rating?.rate,
      this.rating?.count,
      true
    );
  }
  DisplayRatings = (
    ratings: number | 0 = 0,
    reviews: number | 0 = 0,
    reviewRequired: boolean
  ): string => {
    let elements = "";

    for (var i = 1; i <= 5; i++) {
      if (i < ratings) {
        elements += `<i
            key=${i}
            class="fa fa-star"
            aria-hidden="true"
            style="color:'#f2b01e'"
          ></i>`;
      } else {
        let value = Number(i - ratings);
        if (value > 0 && value < 1) {
          elements += `<i
              key=${i}
              class="fa fa-star-half-o"
              style="color:'#f2b01e'"
              aria-hidden="true"
            ></i>`;
        } else {
          elements += `<i
              key=${i}
              className="fa fa-star-o"
              aria-hidden="true"
              style="color: '#f2b01e'"
            ></i>`;
        }
      }
    }
    if (reviewRequired) {
      elements += `<span key=${i + 1}> (${reviews || 0} Reviews)</span>`;
    }
    return `<p>${elements}</p>`;
  };
}
</script>

<style lang="scss"></style>
