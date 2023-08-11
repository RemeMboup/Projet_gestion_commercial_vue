import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const fournisseur = {
    state: {
        selected_fournisseur: null,
        fournisseurs: [],
        fournisseursFromSearch: [],
        //isRefreshingUsers: false,
        loadingfournisseur:false,
    },

    actions,
    mutations,
    getters
}
export default fournisseur