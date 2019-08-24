<template>
<div class="container">
    <div class="row">
        <div class="col-6 offset-3 pt-3 card mt-5 shadow">
            <div class="card-body">
                <h3>Ürün Ekle</h3>
                <hr>
                <div class="form-group">
                    <label>Ürün Adı</label>
                    <input v-model="product.name" type="text" class="form-control" placeholder="Ürün adını giriniz..">
                </div>
                <div class="form-group">
                    <label>Adet</label>
                    <input v-model="product.amount" type="number" class="form-control" placeholder="Ürün adetini giriniz..">
                </div>
                <div class="form-group">
                    <label>Fiyat</label>
                    <input v-model="product.price" type="number" class="form-control" placeholder="Ürün fiyatı giriniz..">
                </div>
                <div class="form-group">
                    <label>İskonto Oranı</label>
                    <input v-model="product.discount" type="number" class="form-control" placeholder="Ürün iskonto giriniz..">
                </div>
                <div class="form-group">
                    <label>Eklenilecek Kategori</label>
                    <select 
                        v-model="product.categoryId" 
                        class="form-control">
                      <option 
                             :value="category.id"
                             v-for="category in categoryGet" :key="category.id"> 
                             {{ category.categoryName }}
                        </option>
                    </select>
                </div>                
                <div class="form-group">
                    <label>Açıklama</label>
                    <textarea v-model="product.description"  rows="5" placeholder="Ürüne ait bir açıklama giriniz..."
                              class="form-control"></textarea>
                </div>
                <hr>
                <button  @click="save" :disabled="saveEnabled" class="btn btn-primary">Kaydet</button>
                <hr>
                <hr>
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
			product : {
				name : null,
				amount : null,
				price : null,
				discount : null,
				description : null,
                categoryId : null, 
			}
		}
	},
    computed : {
        ...mapGetters(["categoryGet"]),
        saveEnabled(){
            if (this.product.categoryId !== null) {
                return false
            }else{
                return true
            }             
        }
    },
	methods : {
		save(){
			this.$store.dispatch("productSave", this.product)
			this.product = ""
		},
	}
}
</script>