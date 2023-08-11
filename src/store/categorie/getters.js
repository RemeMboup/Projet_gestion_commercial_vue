let getters = {
    /* user getters */
    all_categories: state => {
        console.log(' all users getters')
        return state.categories
    },

    categories_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.categoriesFromSearch
    },

    selected_categorie: state => {
        console.log('user getters')
        return state.selected_categorie
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingCategorie
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters