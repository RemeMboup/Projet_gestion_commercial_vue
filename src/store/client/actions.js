import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* Categories actions */
    /* add Categorie action */
    getAllClients: function({ commit}) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/client-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllClients', response.data)
            confirm.log('Mareme')
        }).catch(error => {
            console.log(error)
        })
    },
    addClient: function({ dispatch }, item) {
        console.log('Action Add Categorie')
        axios({
            url: 'http://localhost:8000/client-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new categorie successed")
          dispatch('getAllClient')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update Categorie action*/
    updateClient: function({ dispatch}, item) {
        console.log('Action update Categorie...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/client/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update categorie successed")
            dispatch('getAllCategorie')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove Categorie action */
    removeClient: function({dispatch}, id) {
        console.log('Action update Categorie...')
        axios({
            url: 'http://localhost:8000/client/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete client successed")
            dispatch('getAllClient')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get Categorie mutation */
    selectClient: function({ commit}, id) {
        console.log('select Client action')

        axios({
            url: 'http://localhost:8000/client/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedClient', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    searchClient({ commit }, client) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/client-create/?nom='+client.nom,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllClientsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions