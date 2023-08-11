import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllDetail_approvisionnements: (state, payload) => {
        console.log('setUsers mutation called')
        state.detail_approvisionnements = payload
    },

    setAllDetail_approvisionnementsFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.detail_approvisionnementsFromSearch = payload
    },

    setSelectedDetail_approvisionnement: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_detail_approvisionnement = payload
    },
    setLoadingDetail_approvisionnement: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingDetail_approvisionnement = payload
      },
}

export default mutations