let getters = {
    selected_notification: state => {
        console.log('selected notification getter called!')
        return state.notification
    },
}

export default getters