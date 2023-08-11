import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllDetail_commandes: (state, payload) => {
        console.log('setUsers mutation called')
        state.detail_commandes = payload
    },

    setAllDetail_commandesFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.detail_commandesFromSearch = payload
    },
    setDetail_commandesFacture: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.detail_commandesFacture = payload
    },

    setSelectedDetail_commande: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_detail_commande = payload
    },
    setLoadingDetail_commande: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loading_detail_commande = payload
      },
}

export default mutations