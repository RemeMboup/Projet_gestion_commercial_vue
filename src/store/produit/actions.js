import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* produits actions */
    /* add produit action */
    getAllProduits: function({ commit}) {
        console.log('select produit action')

        axios({
            url: 'http://localhost:8000/produit-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllProduits', response.data)
            confirm.log('Mareme')
        }).catch(error => {
            console.log(error)
        })
    },
    addProduit: function({ dispatch }, item) {
        console.log('Action Add produit')
        axios({
            url: 'http://localhost:8000/produit-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          //dispatch('generateNotification', "Add new produit successed")
          dispatch('getAllProduit')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update produit action*/
    updateProduit: function({ dispatch}, item) {
        console.log('Action update produit...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/produit/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update produit successed")
            dispatch('getAllproduit')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove produit action */
    removeProduit: function({dispatch}, id) {
        console.log('Action update produit...')
        axios({
            url: 'http://localhost:8000/produit/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete produit successed")
            dispatch('getAllproduit')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get produit mutation */
    selectProduit: function({ commit}, id) {
        console.log('select produit action')

        axios({
            url: 'http://localhost:8000/produit/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedProduit', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    /* get produits mutation */
    getproduits: function({ commit }) {
        console.log('Get produits actions called')
        axios({
            url: 'http://localhost:8000/produit/' + item.produit.id + '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            commit('setAllproduits', response.data)
        }).catch(error => {
            // console.log(error)
        })
    },
    searchProduit({ commit }, produit) {
        console.log('Get produits actions called')
        axios({
            url: 'http://localhost:8000/produit-create/?nom='+produit.nom,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllProduitsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions