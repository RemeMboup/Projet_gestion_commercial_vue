let getters = {
    /* user getters */
    all_detail_commandes: state => {
        console.log(' all users getters')
        return state.detail_commandes
    },

    detail_commandes_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.detail_commandesFromSearch
    },
    detail_commandes_facture: state => {
        console.log(' all usersFromSearch getters')
        return state.detail_commandesFacture
    },

    selected_detail_commande: state => {
        console.log('user getters')
        return state.selected_detail_commande
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingdetail_commande
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters