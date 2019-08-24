import Vue from "vue";
import { router } from "../../router";

const state = {
	products : [] 
}

const getters = {
	getProducts(state){
		return state.products
  },
    getProduct: (state) => (key) => {
        return state.products.filter(product => product.key == key)
  },
  getCategoryProductCount : (state) => (id) => {
  return state.products.filter(product => product.categoryId == id)
  },
}

const mutations = {
	productSet(state, product){
		state.products.push(product)
	}
}

const actions = {
	initApp({commit}){
		Vue.http.get("https://vuejs-firebase-stock-app.firebaseio.com/products.json")
		.then(response => {

			let data = response.body

			for(let key in data){
				data[key].key = key
				commit('productSet', data[key])
			}

		})	
	},
	productSave({commit, dispatch}, product){
		
		Vue.http.post("https://vuejs-firebase-stock-app.firebaseio.com/products.json", product)
		.then((response) => {
			
			product.id = response.body.name
			commit("productSet", product)

			let discount_rate =  Number(product.price * product.discount) / 100 
			let discount_price = Number(product.price - discount_rate) 

			let tradeResult = {
				purchase : discount_price, 
				sale : 0,
				amount : product.amount	  
			}

			dispatch("tradeResult", tradeResult)
			router.replace("/")

		})
	},
	sellProduct({ state, dispatch }, payload){

		let products = state.products.filter(product => {
			return product.key == payload.key
		})		

		if (products) {

			let totalCount = products[0].amount - payload.amount

			Vue.http.patch("https://vuejs-firebase-stock-app.firebaseio.com/products/"+ payload.key + ".json", { amount : totalCount })
			.then(() => {

			let tradeResult = {
				purchase : 0, 
				sale   : products[0].price,
				amount : products.amount	   
			}

			dispatch("tradeResult", tradeResult)
			router.replace("/")

			})
		}	
	},
	productDelete({ dispatch } ,product){
		if (product.key) {
			Vue.http.delete("https://vuejs-firebase-stock-app.firebaseio.com/products/" + product.key + ".json")
			.then(() => {

				let discount_rate =  Number(product.price * product.discount) / 100 
				let discount_price = Number(product.price - discount_rate) 

				let tradeResult = {
					purchase : -discount_price, 
					sale : 0,
					amount : product.amount	  
				}

				dispatch("tradeResult", tradeResult)
				router.replace("/")
			})
		}
	}
}


export default {
	state,
	getters,
	mutations,
	actions
}