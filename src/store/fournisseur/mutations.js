import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllFournisseurs: (state, payload) => {
        console.log('setUsers mutation called')
        state.fournisseurs = payload
    },

    setAllFournisseursFromSearch: (state, payload) => {
        console.log('setAllFournisseursFromSearch mutation called')
        state.fournisseursFromSearch = payload
    },

    setSelectedFournisseur: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_fournisseur = payload
    },
    setLoadingFournisseur: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingFournisseur = payload
      },
}

export default mutations