<template>
    <div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün Çıkışı</h3>
                <hr>
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <select
                         v-model="selectedProduct" 
                         @change="productSelect"
                         class="form-control"
                     >
                    <option v-if="getProductCategory(product.categoryId)[0]"
                       :disabled="product.amount == 0"
                       :value="product.key"
                        v-for="product in getProducts" :key="product.id">
                        {{ product.name }} -
                        {{ getProductCategory(product.categoryId)[0].categoryName }} Kategorisi
                        </option>  
                    </select>
                </div>
                <div class="card mb-2 border border-danger" v-if="product !== null">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="mb-3">
                                    <span class="badge badge-info">Stok: {{ product.amount }} </span>
                                    <span class="badge badge-primary">Fiyat: {{ product.price }} </span>
                                </div>
                                <p class="border border-warning p-2 text-secondary">Açıklama: {{ product.description }} </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Adet</label>
                    <input type="text"  v-model="product_amount"  class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <hr>
                <button @click="saveProduct" class="btn btn-primary">Kaydet</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    data(){
        return {
            selectedProduct : null, 
            product : null,         
            product_amount : null   
        }
    },
    computed : {
        ...mapGetters(["getProducts", "getProductCategory"]),
    },
    methods : {
        productSelect(){
            this.product = this.$store.getters.getProduct(this.selectedProduct)[0]
        },
        saveProduct(){  
            let product = {
                key    : this.selectedProduct,
                amount : this.product_amount
            }
            this.$store.dispatch("sellProduct", product)
        },
    }
}
</script>

<style scoped>
    .border-danger {
           border-style: dashed !important;
        }
</style>