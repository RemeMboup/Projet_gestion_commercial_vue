import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllProduits: (state, payload) => {
        console.log('setUsers mutation called')
        state.produits = payload
    },

    setAllProduitsFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.produitsFromSearch = payload
    },

    setSelectedProduit: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_produit = payload
    },
    setLoadingProduit: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingproduit = payload
      },
}

export default mutations