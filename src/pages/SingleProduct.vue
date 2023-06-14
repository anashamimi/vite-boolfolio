<template>
    <Loader v-if="product"/>
    <!-- <div v-if="!product">
        <h1 class=" text-white text-center text-uppercase">{{ product.title }}</h1>

        <div class="card text-bg-dark mb-3 shadow">
            <div class="card-header m-auto">
                <img class="img-fluid" :src="product.image" :alt="product.title">
            </div>
            <div class="card-body">
                <h4 class="fs-4 card-title fw-bold text-center text-capitalize py-2">{{ product.title }}</h4>
                <p class="card-text">{{ product.title }}</p>
                <p class="card-text">price: {{ product.price }}&euro;</p>
                <p class="card-text">{{ product.type ? product.type.name : 'No type specified' }}</p>

                <p class="card-text">
                    <router-link :to="{name: 'products'}" class="btn btn-success">
                        Back
                    </router-link>
                </p>
            </div>
        </div>

    </div> -->
</template>

<script>
import axios from 'axios';
import Loader from '../components/Loader.vue';
export default {
    name: 'SingleProduct',
    components: {
        Loader,
    },
    data() {
        return {
            product: null,
            apiUrl: 'http://127.0.0.1:8000/api',
        }
    },
    methods: {
        getProduct() {
            axios.get(`${this.apiUrl}/products/${this.$route.params.id}`).then((res) => {
                if (res.data.success) {
                    this.product = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    },

    mounted() {
        this.getProduct();
    }
}
</script>

<style lang="scss" scoped>
</style>