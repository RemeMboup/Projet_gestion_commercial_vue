import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllFacture_clients: (state, payload) => {
        console.log('setUsers mutation called')
        state.facture_clients = payload
    },

    setAllFacture_clientsFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.facture_clientsFromSearch = payload
    },

    setSelectedFacture_client: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_facture_client = payload
    },
    setLoadingFacture_client: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingfacture_client = payload
      },
}

export default mutations