import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllCommandes: (state, payload) => {
        console.log('setUsers mutation called')
        state.commandes = payload
    },

    setAllCommandesFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.commandesFromSearch = payload
    },

    setSelectedCommande: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_commande = payload
    },
    setLoadingCommande: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingcommande = payload
      },
}

export default mutations