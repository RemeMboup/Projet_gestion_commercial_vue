let getters = {
    /* user getters */
    all_users: state => {
        console.log(' all users getters')
        return state.users
    },

    users_from_search: state => {
        console.log(' all usersFromSearch getters')
        return state.usersFromSearch
    },

    selected_user: state => {
        console.log('user getters')
        return state.selected_user
    },

    loading_user: state => {
        console.log('Loading user getter called')
        return state.loadingUser
      },
    /* logged_user_permissions: state => {
        return state.loggedUserPermissions
    } */
}

export default getters