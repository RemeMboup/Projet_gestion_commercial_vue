import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const detail_commande = {
    state: {
        selected_detail_commande: null,
        detail_commandes: [],
        detail_commandesFromSearch: [],
        detail_commandesFacture: [],
        //isRefreshingUsers: false,
        loading_detail_commande:false,
    },

    actions,
    mutations,
    getters
}
export default detail_commande