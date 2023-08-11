let getters = {
    /* user getters */
    all_detail_approvisionnements: state => {
        console.log(' all users getters')
        return state.detail_approvisionnements
    },

    detail_approvisionnements_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.detail_approvisionnementsFromSearch
    },

    selected_detail_approvisionnement: state => {
        console.log('user getters')
        return state.selected_detail_approvisionnement
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingdetail_approvisionnement
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters