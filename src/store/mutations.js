export const updateTradeResult = (state, payload) => { 
	if (payload.amount) {
		state.purchase += parseFloat(payload.purchase) * parseInt(payload.amount)
		state.sale     += parseFloat(payload.sale) * parseInt(payload.amount)		
	}else{
		state.purchase += parseFloat(payload.purchase)
		state.sale     += parseFloat(payload.sale) 
	}
	state.balance   = parseFloat(payload.sale) - parseInt(payload.purchase)
}


