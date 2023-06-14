<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
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
                    <router-link :to="{ name: 'single-product', params: { id: product.id } }" class="btn btn-warning">Vedi
                        prodotto</router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product'],

}
</script>

<style lang="scss" scoped></style>