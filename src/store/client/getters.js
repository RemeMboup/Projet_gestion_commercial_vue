let getters = {
    /* user getters */
    all_clients: state => {
        console.log(' all users getters')
        return state.clients
    },

    clients_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.clientsFromSearch
    },

    selected_client: state => {
        console.log('user getters')
        return state.selected_client
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingClient
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters