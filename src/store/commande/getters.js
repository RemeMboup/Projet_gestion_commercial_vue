let getters = {
    /* user getters */
    all_commandes: state => {
        console.log(' all users getters')
        return state.commandes
    },

    commandes_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.commandesFromSearch
    },

    selected_commande: state => {
        console.log('user getters')
        return state.selected_commande
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingcommande
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters