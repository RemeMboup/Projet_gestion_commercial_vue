let getters = {
    /* user getters */
    all_facture_clients: state => {
        console.log(' all users getters')
        return state.facture_clients
    },

    facture_clients_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.facture_clientsFromSearch
    },

    selected_facture_client: state => {
        console.log('user getters')
        return state.selected_facture_client
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingfacture_client
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters