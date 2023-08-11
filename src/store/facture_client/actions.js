import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* facture_clients actions */
    /* add facture_client action */
    getAllFacture_clients: function({ commit}) {
        console.log('select facture_client action')

        axios({
            url: 'http://localhost:8000/factclient-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllfacture_clients', response.data)
            
        }).catch(error => {
            console.log(error)
        })
    },
    addFacture_client: function({ dispatch }, item) {
        console.log('Action Add facture_client')
        axios({
            url: 'http://localhost:8000/factclient-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Add new categorie successed")
            dispatch('getAllFacture_clients')
          

        }).catch(error => {
            // console.log(error)
           
        })
    },

    /* update facture_client action*/
    updateFacture_client: function({ dispatch}, item) {
        console.log('Action update facture_client...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/factclient/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update facture_client successed")
            dispatch('getAllfacture_client')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove facture_client action */
    removeFacture_client: function({dispatch}, id) {
        console.log('Action update facture_client...')
        axios({
            url: 'http://localhost:8000/factclient/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete facture_client successed")
            dispatch('getAllfacture_client')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get facture_client mutation */
    selectFacture_client: function({ commit}, id) {
        console.log('select facture_client action')

        axios({
            url: 'http://localhost:8000/factclient/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedFacture_client', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    /* get facture_clients mutation */
    getFacture_clients: function({ commit }) {
        console.log('Get facture_clients actions called')
        axios({
            url: 'http://localhost:8000/factclient/' + item.facture_client.id + '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            commit('setAllfacture_clients', response.data)
        }).catch(error => {
            // console.log(error)
        })
    },
    searchFacture_client({ commit }, facture_client) {
        console.log('Get facture_clients actions called')
        axios({
            url: 'http://localhost:8000/factclient-create/?numero='+facture_client.numero,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllFacture_clientsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    getDetailFacture_client({ commit }, item) {
        console.log('Get facture_clients actions called')
        axios({
            url: 'http://localhost:8000/get-detail-commande/',
            method: 'post',
            data: item,
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllFacture_clientsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
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
    }


  }
  

export default actions