import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const client = {
    state: {
        selected_client: null,
        clients: [],
        clientsFromSearch: [],
        //isRefreshingUsers: false,
        loadingclient:false,
    },

    actions,
    mutations,
    getters
}
export default client