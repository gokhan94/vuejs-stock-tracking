<template>
        <div class="row">
            <div class="col-12 col-md-12 mb-5 card mt-5 shadow">
               <div class="d-inline-flex" style="width:100%;">
                    <div class="card-body">    
                    <h4 v-if="getProducts.length > 0">Kategoriler</h4>
                    <ul v-for="category in categoryGet" :key="category.id" class="list-group list-group-flush d-inline-flex">
                        <li v-if="getCategoryProductCount(category.id) && getCategoryProductCount(category.id).length > 0" class="list-group-item list-inline-mb-0">     
                        <button type="button" class="btn btn-primary">
                          {{ category.categoryName}} 
                          <span class="badge badge-light">
                            {{ getCategoryProductCount(category.id).length }}
                          </span>
                        </button>
                        </li>
                    </ul>
                  </div>
                </div>    
                <div class="card-body">         
                    <h3>Ürün Listesi</h3>
                    <hr>
                    <table v-if="getProducts.length > 0" class="table table-hover table-striped table-bordered">
                        <thead>
                        <th>id</th>
                        <th style="width: 160px;" class="align-middle text-center">Kategori</th>
                        <th class="align-middle text-center">Ürün Adı</th>
                        <th class="align-middle text-center">Adet</th>
                        <th>Birim Fiyat</th>
                        <th>İskonto Oranı</th>
                        <th style="width: 160px;">İndirilecek Fiyat</th>
                        <th>Açıklama</th>
                        <th>Ürün Düzeni</th>
                        </thead>
                        <tbody>
                        <tr v-for="product in getProducts" :key="product.key">
                            <td style="width: 140px;" class="align-middle text-center"><span class="badge badge-info"> {{ product.key }}  </span></td>
                            <td v-if="getProductCategory(product.categoryId)[0]" 
                                class="align-middle text-center">  
                            <router-link  tag='button' class="btn btn-info btn-sm"  :to=" '/kategori-detay/'+ product.categoryId">
                            {{ getProductCategory(product.categoryId)[0].categoryName }}</router-link>                          
                            </td>
                           
                            <td style="width: 160px;" class="align-middle text-center">{{ product.name }}  </td>
                            <td style="width: 160px;" class="align-middle text-center" :class="getAmountClass(product.amount)">{{ product.amount }} </td>
                            <td style="width: 160px;">{{ product.price | currency }}  </td>
                            <td style="width: 160px;" class="align-middle"> % {{ product.discount }} </td>
                            <td  class="align-middle">
                             {{ ((product.price * product.discount) / 100) | currency }} 
                            </td>
                            <td class="align-middle"> {{ product.description | textLimit }} ...</td>
                            <td class="align-middle">
                            <button @click="productDelete(product)" type="button" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></button>         -
                            <router-link  tag='button' class="btn btn-info btn-sm"  :to=" '/urun-detay/'+ product.key">Detay</router-link> 

                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>Bir Kayıt Bulamadık</strong>
                        <br>
                        <p>Kayıt Eklemek için :
                         <router-link  tag='a'   
                         :to="'/urun-ekle/'">Ürün Ekle</router-link> 
                         sayfasına gidebilisiniz
                        </p>
                    </div>
                </div>
            </div>         
        </div>  
</template>
<script>
import { mapGetters } from "vuex"
export default {
computed : {
    ...mapGetters(["getProducts", "getProductCategory", "categoryGet", "getCategoryProductCount"]),
    },
methods : {
    getAmountClass(amount){
        return {
            'btn-danger text-white'  : amount == 0,
            'btn-success text-white' : amount !== 0, 
        }
    },    
    productDelete(product){
        this.$store.dispatch('productDelete', product)
    }
  }        
} 
</script>
