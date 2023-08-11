let getters = {
    /* user getters */
    all_approvisionnements: state => {
        console.log(' all users getters')
        return state.approvisionnements
    },

    approvisionnements_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.approvisionnementsFromSearch
    },

    selected_approvisionnement: state => {
        console.log('user getters')
        return state.selected_approvisionnement
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingapprovisionnement
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters