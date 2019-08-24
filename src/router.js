import Vue from "vue";
import VueRouter   	   from "vue-router";
import ProductList 	   from './components/products/ProductList';
import ProductBuy      from './components/products/ProductBuy';
import ProductSell     from './components/products/ProductSell';
import ProductDetail   from './components/products/ProductDetail';
import CategoryAdd     from './components/category/CategoryAdd';
import CategoryDetail  from './components/category/CategoryDetail';

Vue.use(VueRouter);

const routes = [
	{ path: "/", 	  	           component: ProductList },
	{ path: "/urun-ekle",     	   component: ProductBuy },
	{ path: "/urun-satisi",  	   component: ProductSell },
	{ path: "/urun-detay/:key",    component: ProductDetail },
	{ path: "/kategori-ekle", 	   component: CategoryAdd },
	{ path: "/kategori-detay/:id", component: CategoryDetail },
	{ path: '*', redirect: "/" }
];


export const router = new VueRouter({
  mode : "history",
  routes 
})