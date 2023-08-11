let getters = {
    /* user getters */
    all_fournisseurs: state => {
        console.log(' all users getters')
        return state.fournisseurs
    },

    fournisseurs_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.fournisseursFromSearch
    },

    selected_fournisseur: state => {
        console.log('user getters')
        return state.selected_fournisseur
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingfournisseur
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters