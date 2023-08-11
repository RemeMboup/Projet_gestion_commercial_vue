import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* commandes actions */
    /* add commande action */
    getAllCommandes: function({ commit}) {
        console.log('select commande action')

        axios({
            url: 'http://localhost:8000/commande-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllCommandes', response.data)
            
        }).catch(error => {
            console.log(error)
        })
    },
    addCommande: function({ commit, dispatch }, item) {
        console.log('Action Add commande')
        axios({
            url: 'http://localhost:8000/commande-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new commande successed")
          dispatch('getAllCommande')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update commande action*/
    updateCommande: function({ dispatch}, item) {
        console.log('Action update commande...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/commande/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update commande successed")
            dispatch('getAllcommande')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove commande action */
    removeCommande: function({dispatch}, id) {
        console.log('Action update commande...')
        axios({
            url: 'http://localhost:8000/commande/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete commande successed")
            dispatch('getAllcommande')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get commande mutation */
    selectCommande: function({ commit}, id) {
        console.log('select commande action')

        axios({
            url: 'http://localhost:8000/commande/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedCommande', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    /* get commandes mutation */
    getCommandes: function({ commit }) {
        console.log('Get commandes actions called')
        axios({
            url: 'http://localhost:8000/commande/' + item.commande.id + '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            commit('setAllCommandes', response.data)
        }).catch(error => {
            // console.log(error)
        })
    },
    searchCommande({ commit }, commande) {
        console.log('Get commandes actions called')
        axios({
            url: 'http://localhost:8000/commande-create/?nom='+commande.nom,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllCommandesFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions