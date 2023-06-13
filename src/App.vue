<template>
  <div class="container" id="product-list">
    <h1 class=" text-center p-4 text-white text-uppercase">Products list</h1>
    <div class="row gy-4 mb-4">
      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="(product, index) in products" :key="product.id">
        <div class="card text-bg-dark mb-3 shadow">
            <div class="card-header m-auto">
              <img class="img-fluid" :src="product.image" :alt="product.title">
            </div>
            <div class="card-body">
              <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ product.title }}</h4>
              <p class="card-text">{{ product.title }}</p>
              <p class="card-text">price: {{ product.price }}&euro;</p>
              <p class="card-text">{{ product.type ? product.type.name : 'No type specified' }}</p>
            </div>
          </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
            @click="getData(currentPage - 1)">Previous</button></li>
        <li class="page-item" v-for="n in lastPage"><button :class="{ 'page-link': true, 'active': currentPage === n }"
            @click="getData(n)">{{ n }}</button>
        </li>

        <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
            @click="getData(currentPage + 1)">Next</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  'name': 'App',
  data() {
    return {
      products: [],
      apiUrl: 'http://127.0.0.1:8000/api',
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    getData(numPage) {
      axios.get(`${this.apiUrl}/products`, {
        params: {
          'page': numPage
        }
      }).then((res) => {
        this.products = res.data.results.data;
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
      })
    }
  },
  mounted() {
    this.getData(1);
  }
}
</script>

<style lang="scss" scoped></style>
