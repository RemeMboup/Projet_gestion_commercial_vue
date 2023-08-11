import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const facture_client = {
    state: {
        selected_facture_client: null,
        facture_clients: [],
        facture_clientsFromSearch: [],
        //isRefreshingUsers: false,
        loadingfacture_client:false,
    },

    actions,
    mutations,
    getters
}
export default facture_client