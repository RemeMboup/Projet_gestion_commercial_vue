let getters = {
    /* user getters */
    all_produits: state => {
        console.log(' all users getters')
        return state.produits
    },

    produits_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.produitsFromSearch
    },

    selected_produit: state => {
        console.log('user getters')
        return state.selected_produit
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingproduit
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters