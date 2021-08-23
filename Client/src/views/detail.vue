<template>
  <div class="container">
    <div class="row">
      <div v-if="!show" class="empty">
        sa
      </div>
      <div v-else class="col-md-6">
        <div style="max-width:100%" class="img-box">
          <img style="max-width:100%"  :src="product.productImage" alt="" />
        </div>
      </div>
      <div class="col-md-6">
        <h3>{{ product.productName }}</h3>
        <p>Price:{{ product.productPrice }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const show = ref(false);
    const route = useRoute();
    let product = ref(null);
    async function getDetails() {
      let data = { id: route.params.id };
      const response = await fetch("http://localhost:8800/getProduct", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });
      const resy = await response.json();
      product.value = resy[0];
    }
    getDetails().then(() => {
      show.value = true;
    });
    return {product,show,getDetails};
  },
};
</script>

<style></style>
