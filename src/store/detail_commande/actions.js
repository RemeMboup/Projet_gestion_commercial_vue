import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* detail_commandes actions */
    /* add detail_commande action */
    getAllDetail_commandes: function({ commit}) {
        console.log('select detail_commande action')

        axios({
            url: 'http://localhost:8000/detail-commande-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllDetail_commandes', response.data)
            confirm.log('Mareme')
        }).catch(error => {
            console.log(error)
        })
    },
    addDetail_commande: function({ commit, dispatch }, item) {
        console.log('Action Add detail_commande')
        axios({
            url: 'http://localhost:8000/detail-commande-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new detail_commande successed")
          dispatch('getAllDetail_commandes')

        }).catch(error => {
            // console.log(error)

           
        })
    },
    DetailAdd: function({ dispatch }, item) {
        console.log('Action Add detail_commande')
        axios({
            url: 'http://localhost:8000/add-detail-commande/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new detail_commande successed")
          dispatch('getAllDetail_commandes')

        }).catch(error => {
            // console.log(error)

           
        })
    },
    addFactureClient: function({ commit, dispatch }, item) {
        console.log('Action Add detail_commande')
        axios({
            url: 'http://localhost:8000/add-facture-client/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new detail_commande successed")
          dispatch('getAllDetail_commandes')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update detail_commande action*/
    updateDetail_commande: function({ dispatch}, item) {
        console.log('Action update detail-commande...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/detail-commande/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update detail_commande successed")
            dispatch('getAllDetail_commandes')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove detail_commande action */
    removeDetail_commande: function({dispatch}, id) {
        console.log('Action update detail_commande...')
        axios({
            url: 'http://localhost:8000/detail-commande/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete detail_commande successed")
            dispatch('getAllDetail_commandes')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get detail_commande mutation */
    selectDetail_commande: function({ commit}, id) {
        console.log('select detail_commande action')

        axios({
            url: 'http://localhost:8000/detail-commande/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedDetail_commande', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    searchDetail_commande({ commit }, detail_command) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/detail-commande-create/?numero='+ detail_command.numero,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllDetail_commandesFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    getFactureDetail_commande({ commit }, commande) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/get-detail-commande/?numero='+commande.numero,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setDetail_commandesFacture',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }
  }
  

export default actions