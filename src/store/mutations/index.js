import {
	ALL_ITEMS,
	ALL_ITEMS_SUCCESS,
	ITEM_BY_ID,
	ITEM_BY_ID_SUCCESS,
	ALL_PAGES,
	ALL_PAGES_SUCCESS,
	PAGE_BY_ID,
	PAGE_BY_ID_SUCCESS
} from '../mutation-types'

export const itemMutations = {
	[ALL_ITEMS] (state){
		console.log("enable loading")
	},
	[ALL_ITEMS_SUCCESS] (state,payload){
		state.items = payload
	},
	[ITEM_BY_ID] (state){
		console.log("enable loading")
	},
	[ITEM_BY_ID_SUCCESS] (state,payload){
		state.item = payload
	},
	[ALL_PAGES] (state){
		console.log("enable loading")	
	},
	[ALL_PAGES_SUCCESS] (state,payload){
		state.pages = payload
	},
	[PAGE_BY_ID] (state){
		console.log("enable loading")	
	},
	[PAGE_BY_ID_SUCCESS] (state,payload){
		state.page = payload
	}

}