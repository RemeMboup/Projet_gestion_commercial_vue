import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const commande = {
    state: {
        selected_commande: null,
        commandes: [],
        commandesFromSearch: [],
        //isRefreshingUsers: false,
        loadingcommande:false,
    },

    actions,
    mutations,
    getters
}
export default commande