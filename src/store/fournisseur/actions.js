import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* Categories actions */
    /* add Categorie action */
    getAllFournisseurs: function({ commit}) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/fournisseur-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllFournisseurs', response.data)
           
        }).catch(error => {
            console.log(error)
        })
    },
    addFournisseur: function({ dispatch }, item) {
        console.log('Action Add Categorie')
        axios({
            url: 'http://localhost:8000/fournisseur-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new categorie successed")
          dispatch('getAllFournisseur')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update Categorie action*/
    updateFournisseur: function({ dispatch}, item) {
        console.log('Action update Categorie...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/fournisseur/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update fournisseur successed")
            dispatch('getAllFournisseur')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove Categorie action */
    removeFournisseur: function({dispatch}, id) {
        console.log('Action update Categorie...')
        axios({
            url: 'http://localhost:8000/fournisseur/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete fournisseur successed")
            dispatch('getAllFournisseur')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get Categorie mutation */
    selectFournisseur: function({ commit}, id) {
        console.log('select Fournisseur action')

        axios({
            url: 'http://localhost:8000/fournisseur/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedFournisseur', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    searchFournisseur({ commit }, fournisseur) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/fournisseur-create/?nom='+fournisseur.nom,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllFournisseursFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions