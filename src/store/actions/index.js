import axios from 'axios'
import {API_URL} from '../config'
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

export const itemActions = {
	allItems({commit}){
		commit(ALL_ITEMS)
		axios.get(`${API_URL}/manga`).then(response => {
			commit(ALL_ITEMS_SUCCESS,response.data)
		})
	},
	itemById({commit},payload){
		commit(ITEM_BY_ID)
		axios.get(`${API_URL}/manga/${payload}`).then(response => {
			commit(ITEM_BY_ID_SUCCESS, response.data)
		})
	},
	allPages({commit}){
		commit(ALL_PAGES)
		axios.get(`${API_URL}/chapter_mangas`).then(response => {
			commit(ALL_PAGES_SUCCESS,response.data)
		})
	},
	// pagesByIdItem({commit},payload){
	// 	commit(PAGE_BY_ID)
	// 	axios.get(`${API_URL}/pages?idItem=${payload}`).then(response => {
	// 		commit(PAGE_BY_ID_SUCCESS,response.data)
	// 	})
	// }
}
