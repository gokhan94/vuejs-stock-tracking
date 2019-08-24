import Vue from "vue";
import { router } from "../../router";

const state = {
	category : []
}

const getters = {
	categoryGet(state){
		return state.category
	},
    getProductCategory: (state) => (id) => {
        return state.category.filter(category => category.id === id)
  },
}

const mutations = {
	categorySet(state, category){
		state.category.push(category)
	}
}

const actions = {
	initCategory({commit}){
		Vue.http.get("https://vuejs-firebase-stock-app.firebaseio.com/categories.json")
		.then(response => {

			let data = response.body
			
			for(let key in data){
				data[key].id = key 	          
				commit("categorySet", data[key]) 
			}
		})	
	},
	categoryAdd({commit}, category){	
		Vue.http.post("https://vuejs-firebase-stock-app.firebaseio.com/categories.json", category)
		.then((response) => {
		    category.id = response.body.name
			commit('categorySet', category)
			router.replace("/")
		})
	}
}
export default {
	state,
	getters,
	mutations,
	actions
}