import axios from 'axios'
import { resolve } from 'url'

let actions = {

    /* users actions */
    /* add user action */
    addUser: function({ commit, dispatch }, item) {
        console.log('Action Add User')
        axios({
            url: 'http://localhost:8000/user-create/',
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: item.user
        }).then(response => {
          console.log(response.data)
        }).catch(error => {
            // console.log(error)

           
        })
    },

    /* update user action*/
    updateUser: function({ commit, dispatch }, item) {
        console.log('Action update user...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/user-create/' + item.user.id + '/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            },
            data: {
                id: item.user.id,
                email: item.user.email,
                first_name: item.user.first_name,
                last_name: item.user.last_name,
                password: item.user.password
            }
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            // console.log(error)
        })
    },

    /* remove user action */
    removeUser: function({ commit, dispatch }, item) {
        console.log('Action update user...')
        console.log(item)
        axios({
            url: 'http://localhost:8000/user-create/' + item.user.id + '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            // console.log(error)
        })
    },

    /* get user mutation */
    selectUser: function({ commit, dispatch }, item) {
        console.log('select user action')

        axios({
            url: 'http://localhost:8000/user-create/?email=' + item.email,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            const user = response.data[0]
            commit('setSelectedUser', user)
        }).catch(error => {
            console.log(error)
        })
    },
   
    /* get users mutation */
    getUsers: function({ commit }) {
        console.log('Get users actions called')
        axios({
            url: 'http://localhost:8000/user-create/' + item.user.id + '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'JWT ' + localStorage.getItem('token')
            }
        }).then(response => {
            commit('setAllUsers', response.data)
        }).catch(error => {
            // console.log(error)
        })
    }

  }

export default actions