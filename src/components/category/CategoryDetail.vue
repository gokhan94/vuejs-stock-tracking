<template>
	<div>
        <div class="row">
            <div class="col-12 col-md-12 mb-5 card mt-5 shadow">
            	<div class="card-body">
                    <p style="color: blue">Kategoriye ait bulunan toplam ürün sayısı : 
                    	<strong>{{ categoryProductDetail.length }}</strong>
                    </p>
                    <hr>
            	<table class="table table-hover table-striped table-bordered">
            		<thead>
                        <th class="align-middle text-center">Ürün Adı</th>
                        <th class="align-middle text-center">Adet</th>
                        <th class="align-middle text-center">Fiyat</th>
                        <th class="align-middle text-center">İskonto Oranı</th>
                        <th class="align-middle text-center">İndirilecek Fiyat</th>
                        <th class="align-middle text-center">Açıklama</th>
            		</thead>
            		<tbody>
            			<tr v-for="product in categoryProductDetail" :key="product.key">
            				<td class="align-middle text-center">{{ product.name }}</td>
            				<td class="align-middle text-center">{{ product.amount | currency }} </td>                            
            				<td class="align-middle text-center">{{ product.price | currency }}  </td>
                            <td class="align-middle text-center"> % {{ product.discount }} </td>
                             <td class="align-middle text-center">
                             {{ ((product.price * product.discount) / 100) | currency }} 
                            </td>
                            <td class="align-middle text-center">{{ product.description }}</td>
            			</tr>
            		</tbody>
            	</table>
        	</div>
        </div>   
        </div> 	
	</div>
</template>
<script>
export default {
	computed : {
		categoryProductDetail(){
			let id = this.$route.params.id
			return this.$store.getters.getProducts.filter(function(products){
				return products.categoryId === id
			})
		}
	}
}	
</script>