import axios from 'axios'

let actions = {

    generateNotification({ commit }, item) {
        console.log('generate notification action called')
        commit('setNotification', item)
    },
}

export default actions