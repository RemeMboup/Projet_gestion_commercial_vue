import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllCategories: (state, payload) => {
        console.log('setUsers mutation called')
        state.categories = payload
    },

    setAllCategoriesFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.categoriesFromSearch = payload
    },

    setSelectedCategorie: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_categorie = payload
    },
    setLoadingCategorie: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingCategorie = payload
      },
}

export default mutations