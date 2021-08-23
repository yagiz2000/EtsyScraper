<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row" v-for="(item, i) in products" :key="i">
              <th scope="row">
                <img class="table-img" :src="item.productImage" alt="" />
              </th>
              <td>{{ item.productName }}</td>
              <td>{{ item.productPrice }}</td>
              <td><router-link :to="{name:'detail',params:{id:item.productId}}" tag="a" class="btn btn-primary">Go to details</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const products = ref(null);
    async function getProducts() {
      try {
        let res = await fetch("http://localhost:8800/listProducts");
        let jsndRes = await res.json();
        products.value = jsndRes;
        console.log(products.value, "products değeri");
      } catch (err) {
        console.log(err);
      }
    }
    getProducts();
    return { products, getProducts };
  },
};
</script>

<style>
.table-row{
  align-items: center;
}
.table-row:hover{
  background-color: rgba(173, 170, 170, 0.911);
}
.table-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
