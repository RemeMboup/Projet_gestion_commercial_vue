import axios from 'axios'
let mutations = {

    /* users mutation */

    setAllUsers: (state, payload) => {
        console.log('setUsers mutation called')
        state.users = payload
    },

    setAllUsersFromSearch: (state, payload) => {
        console.log('setAllUsersFromSearch mutation called')
        state.usersFromSearch = payload
    },

    setSelectedUser: (state, payload) => {
        console.log('set selected User mutation called')
        state.selected_user = payload
    },
    setLoadingUser: function (state, payload) {
        console.log("set loading user mutation called...")
        state.loadingUser = payload
      },
}

export default mutations