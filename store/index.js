import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
	state: {
		currentPage: ''
	},
	mutations: {
		setCurrentPage(state, page) {
			state.currentPage = page;
		}
	}
});
export default store;