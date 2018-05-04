export const itemGetters = {
	allItems: (state) => {
		return state.items
	},
	getItemById: (state,getters) => id => {
		if(getters.allItems.length > 0){
			return getters.allItems.filter(p => p.id === id)[0]
		}else{
			return state.item
		}
	},
	allPages: (state) => {
		return state.pages
	},
	getPageById: (state, getters) => id => {
		if(getters.allPages.length > 0){
			return getters.allPages.filter(p=> p.idItem === id)
		}else{
			return state.page
		}

	}
}