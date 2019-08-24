import Vue from "vue";

export const tradeResult = ({state, commit}, tradeResult) => {
	commit("updateTradeResult", tradeResult)

	let result = {
		purchase : state.purchase,
		sale     : state.sale
	}

	Vue.http.put("https://vuejs-firebase-stock-app.firebaseio.com/trade.json", result)
	.then(() => {})
}
export const getTradeResult = ({commit}) => {	
	Vue.http.get("https://vuejs-firebase-stock-app.firebaseio.com/trade.json")
	.then( responce => {
		commit("updateTradeResult", responce.body)
	})
}