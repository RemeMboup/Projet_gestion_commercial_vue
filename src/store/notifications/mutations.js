let mutations = {

    setNotification: function(state, payload) {
        console.log('Set notification mutations called')
        state.notification = payload
    },

}

export default mutations