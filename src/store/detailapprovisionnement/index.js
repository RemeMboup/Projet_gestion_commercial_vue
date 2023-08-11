import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const detail_approvisionnement = {
    state: {
        selected_detail_approvisionnement: null,
        detail_approvisionnements: [],
        detail_approvisionnementsFromSearch: [],
        //isRefreshingUsers: false,
        loadingdetail_approvisionnement:false,
    },

    actions,
    mutations,
    getters
}
export default detail_approvisionnement