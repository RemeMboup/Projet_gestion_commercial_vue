import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* Detail_approvisionnements actions */
    /* add Detail_approvisionnement action */
    getAllDetail_approvisionnement: function({ commit}) {
        console.log('select Detail_approvisionnement action')

        axios({
            url: 'http://localhost:8000/detail-appros-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllDetail_approvisionnements', response.data)
            confirm.log('Mareme')
        }).catch(error => {
            console.log(error)
        })
    },
    addDetail_approvisionnement: function({ commit, dispatch }, item) {
        console.log('Action Add Detail_approvisionnement')
        axios({
            url: 'http://localhost:8000/detail-appros-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
          console.log(response.data)
          dispatch('generateNotification', "Add new Detail_approvisionnement successed")
          dispatch('getAllDetail_approvisionnement')

        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update Detail_approvisionnement action*/
    updateDetail_approvisionnement: function({ dispatch}, item) {
        console.log('Action update Detail_approvisionnement...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/detail-appros/' + item.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Update Detail_approvisionnement successed")
            dispatch('getAllDetail_approvisionnement')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove Detail_approvisionnement action */
    removeDetail_approvisionnement: function({dispatch}, id) {
        console.log('Action update Detail_approvisionnement...')
        axios({
            url: 'http://localhost:8000/detail-appros/' + id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            dispatch('generateNotification', "Delete Detail_approvisionnement successed")
            dispatch('getAllDetail_approvisionnement')
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get Detail_approvisionnement mutation */
    selectDetail_approvisionnement: function({ commit}, id) {
        console.log('select Detail_approvisionnement action')

        axios({
            url: 'http://localhost:8000/detail-appros/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedDetail_approvisionnement', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
    searchDetail_approvisionnement({ commit }, detailapprovisionnement) {
        console.log('Get Detail_approvisionnements actions called')
        axios({
            url: 'http://localhost:8000/detail-appros-create/?numero='+detailapprovisionnement.numero,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllDetail_approvisionnementsFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions