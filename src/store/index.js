import Vue from 'vue'
import Vuex from 'vuex'
import {itemGetters} from './getters'
import {itemMutations} from './mutations'
import {itemActions} from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: true,
	state: {
		item:{},
		items: [],
		page:{},
		pages:[],
	},
	getters:Object.assign({},itemGetters),
	mutations:Object.assign({},itemMutations),
	actions:Object.assign({},itemActions)
})

export default store