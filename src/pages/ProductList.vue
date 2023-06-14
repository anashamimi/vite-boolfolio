<template>
    <Loader  v-if="products.length === 0"/>
    <div class="container" id="product-list">
        <h1 class=" text-center p-4 text-white text-uppercase">Products list</h1>
        <div class="row gy-4 mb-4" >
            <ProductCard v-for="(product, index) in products" :key="product.id" :product="product"/>
            
        </div>
        <nav aria-label="Page navigation example" :class="products.length === 0 ? 'd-none' : ''">
            <ul class="pagination">
                <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === 1 }"
                        @click="getData(currentPage - 1)">Previous</button></li>
                <li class="page-item" v-for="n in lastPage"><button
                        :class="{ 'page-link': true, 'active': currentPage === n }" @click="getData(n)">{{ n }}</button>
                </li>

                <li class="page-item"><button :class="{ 'page-link': true, 'disabled': currentPage === lastPage }"
                        @click="getData(currentPage + 1)">Next</button></li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';
import Loader from '../components/Loader.vue';
export default {
    'name': 'ProductList',
    components: {
        ProductCard,
        Loader
    },
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
                console.log(res.data);
                this.products = res.data.results.data;
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
            })
        }
    },
    mounted() {
        this.getData(this.currentPage);
    }
}
</script>
  
<style lang="scss" scoped></style>