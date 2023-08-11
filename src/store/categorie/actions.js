import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* Categories actions */
    /* add Categorie action */
    getAllCategories: function({ commit}) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/categorie-create/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            
            commit('setAllCategories', response.data)
            confirm.log('Mareme')
        }).catch(error => {
            console.log(error)
        })
    },
    addCategorie: function({ commit, dispatch }, item) {
        console.log('Action Add Categorie')
        axios({
            url: 'http://localhost:8000/categorie-create/',
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
    updateCategorie: function({ dispatch}, item) {
        console.log('Action update Categorie...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/categorie/' + item.id + '/',
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
    removeCategorie: function({dispatch}, id) {
        console.log('Action update Categorie...')
        axios({
            url: 'http://localhost:8000/categorie/' + id + '/',
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
    selectCategorie: function({ commit}, id) {
        console.log('select Categorie action')

        axios({
            url: 'http://localhost:8000/categorie/' +id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
            commit('setSelectedCategorie', response.data)
        }).catch(error => {
            console.log(error)
        })
    },
   
    /* get Categories mutation */
    getCategories: function({ commit }) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/categorie/' + item.categorie.id + '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            commit('setAllCategories', response.data)
        }).catch(error => {
            // console.log(error)
        })
    },
    searchCategorie({ commit }, categorie) {
        console.log('Get Categories actions called')
        axios({
            url: 'http://localhost:8000/categorie-create/?nom='+categorie.nom,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
           
            commit('setAllCategoriesFromSearch',  response.data)
        }).catch(error => {
            console.log(error)
        })
    }


  }
  

export default actions