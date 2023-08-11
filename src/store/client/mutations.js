import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllClients: (state, payload) => {
        console.log('setUsers mutation called')
        state.clients = payload
    },

    setAllClientsFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.clientsFromSearch = payload
    },

    setSelectedClient: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_client = payload
    },
    setLoadingClient: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingCategorie = payload
      },
}

export default mutations