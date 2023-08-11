import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const user = {
    state: {
        selected_user: null,
        users: [],
        usersFromSearch: [],
        //isRefreshingUsers: false,
        loadingUser:false,
    },

    actions,
    mutations,
    getters
}
export default user