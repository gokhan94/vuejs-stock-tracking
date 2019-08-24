<template>
<div class="card card-outline-secondary my-4">
          <div class="card-header">
            Ürün Detayı
          </div>
          <div class="card-body">
            <p><strong>{{ product.name | Upper }}</strong> adlı ürüne iskonto yapıldıktan sonraki tutar: <strong>{{ discountProductPrice(product) }} {{ discountPrice | currency }}</strong></p>
            <hr>
            <p>Ürün Açıklaması: <strong>{{ product.description }}</strong></p>
            <hr>
            <p>İskontodan sonraki kazancınız: <strong>{{ discountProductPrice(product) }}{{ discountRate | currency  }}</strong></p>
            <p>Kalan stok miktarı : <strong>{{ product.amount }}</strong> adet</p>        <hr>
			<router-link  tag='button' class="btn btn-info btn-sm"  :to=" '/'">Anasayfaya Geri Dön</router-link> 
          </div>
        </div>
</template>
<script>
export default {
	data(){
		return {
			discountPrice : null,
			discountRate : null
		}
	},
	computed : {
		product(){
			let key = this.$route.params.key
			return this.$store.getters.getProducts.filter(function(product){
				return product.key === key
			})[0]
		}
	},
	filters : {
		Upper(value) {
              return value.toUpperCase();
        }
	},
	methods : {
		discountProductPrice(product){
			let discount_rate =  Number(product.price * product.discount) / 100
			let discount_price = Number(product.price - discount_rate) 
			this.discountPrice = discount_price
			this.discountRate  = discount_rate
		}
	}
}	
</script>
