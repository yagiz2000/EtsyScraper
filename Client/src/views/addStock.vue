<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="input-box">
          <h3>Enter the url</h3>
          <div class="input-group mb-3">
            <input
              v-model="productUrl"
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button type="button" class="btn btn-success" @click="addProduct">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let productUrl = ref("");

    async function addProduct() {
      if (productUrl.value == "") {
        alert("Please enter the url");
      } else {
        const data = { url: productUrl.value };
        try {
          const response = await fetch("http://localhost:8800/addProduct", {
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
          let resy = await response.json()
          console.log(resy ,"saaa")
          alert("Completed")
          productUrl.value = "";
        }
        catch(err){
          console.log(err);
            alert("Invalid url or unstable internet connection");
        }
      }
    }
    return {
      productUrl,
      addProduct,
    };
  },
};
</script>

<style>
.input-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
