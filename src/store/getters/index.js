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
	getPageById: (state, getters) => (idItem,latestChapter) => {
		if(getters.allPages.length > 0){
			// const getPagesById = getters.allPages.filter(p=> p.idItem === id)
			return getters.allPages.filter(p=> (p.idItem === idItem && p.id === latestChapter))
		}else{
			return state.page
		}
	}
}