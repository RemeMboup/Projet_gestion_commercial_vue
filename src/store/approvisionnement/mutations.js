import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllApprovisionnements: (state, payload) => {
        console.log('setUsers mutation called')
        state.approvisionnements = payload
    },

    setAllApprovisionnementsFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.approvisionnementsFromSearch = payload
    },

    setSelectedApprovisionnement: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_approvisionnement = payload
    },
    setLoadingApprovisionnement: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingApprovisionnement = payload
      },
}

export default mutations