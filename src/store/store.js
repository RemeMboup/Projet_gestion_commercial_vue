import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from '../store/mutations';
import actions from '../store/actions';

import user from './user'
import categorie from './categorie'
import notifications from './notifications'
import produit from './produit'
import client from './client'
import fournisseur from './fournisseur'
import approvisionnement from './approvisionnement'
import commande from './commande'
import detail_commande from './detail_commande'
import detail_approvisionnement from './detailapprovisionnement'
import facture_client from './facture_client'
import facture_fournisseur from './facture_fournisseur'
import regle_client from './regle_fournisseur'
import regle_fournisseur from './regle_client'


Vue.use(Vuex);

//=======vuex store start===========
const store = new Vuex.Store({
    state: {
        left_open: true,
        left1_open: true,
        right_open: false,
        preloader: true,
        
        formstate: {},
        token:'',
        user: {
            name: "Addison",
            picture: "src/assets/img/authors/avatar1.jpg",
            job: "Project Manager"
        },
    },
    modules:{
        user,
        categorie,
        notifications,
        produit,
        client,
        fournisseur,
        approvisionnement,
        commande,
        detail_commande,
        detail_approvisionnement,
        facture_client,
        facture_fournisseur,
        regle_client,
        regle_fournisseur

    },
    mutations,
    actions
});
//=======vuex store end===========
export default store
