import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const approvisionnement = {
    state: {
        selected_approvisionnement: null,
        approvisionnements: [],
        approvisionnementsFromSearch: [],
        //isRefreshingUsers: false,
        loadingapprovisionnement:false,
    },

    actions,
    mutations,
    getters
}
export default approvisionnement