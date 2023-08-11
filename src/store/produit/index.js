import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const produit = {
    state: {
        selected_produit: null,
        produits: [],
        produitsFromSearch: [],
        //isRefreshingUsers: false,
        loadingproduit:false,
    },

    actions,
    mutations,
    getters
}
export default produit