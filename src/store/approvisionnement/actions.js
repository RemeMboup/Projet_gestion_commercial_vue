import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* Categories actions */
    /* add Categorie action */
    getAllApprovisionnements: function({ commit}) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/approvisionnement-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllApprovisionnements', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    addApprovisionnement: function({dispatch }, item) {
        console.log('Action Add Categorie')
        axios({
            url: 'http://localhost:8000/approvisionnement-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new categorie successed")
          dispatch('getAllCategorie')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update Categorie action*/
    updateApprovisionnement: function({ dispatch}, item) {
        console.log('Action update Categorie...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/approvisionnement/' + item.id + '/',
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
    removeApprovisionnement: function({dispatch}, id) {
        console.log('Action update Categorie...')
        axios({
            url: 'http://localhost:8000/approvisionnement/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete categorie successed")
            dispatch('getAllCategorie')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get Categorie mutation */
    selectApprovisionnement: function({ commit}, id) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/approvisionnement/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedApprovisionnement', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    searchApprovisionnement({ commit }, approvisionnement) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/approvisionnement-create/?numero='+approvisionnement.numero,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllApprovisionnementsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions