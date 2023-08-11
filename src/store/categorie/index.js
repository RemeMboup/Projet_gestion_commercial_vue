import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const categorie = {
    state: {
        selected_categorie: null,
        categories: [],
        categoriesFromSearch: [],
        //isRefreshingUsers: false,
        loadingCategorie:false,
    },

    actions,
    mutations,
    getters
}
export default categorie