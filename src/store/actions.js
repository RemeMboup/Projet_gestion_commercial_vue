import { mutations } from './mutations'
let actions = {
        /**************** Actions about customers **************/
        /* Call addCustomer mutation */
        addCustomer: context => {
            context.commit('addCustomer')
        },

        /* Call removeCustomer mutation */
        removeCustomer: context => {
            context.commit('removeCustomer')
        },

        /* Call getCustomer mutation */
        getCustomer: context => {
            context.commit('getCustomer')
        },

        /* Call getCustomers mutation */
        getCustomers: context => {
            context.commit('getCustomers')
        },

        /* Call updateCustomer mutation */
        updateCustomer: context => {
            context.commit('updateCustomer')
        },

        /* Call getAffliates mutation */
        getAffliates: context => {
            context.commit('getAffliates')
        },

        /**************** Actions about contracts **************/

        /* Call addContract mutation */
        addContract: context => {
            context.commit('addContract')
        },

        /* Call removeContract mutation */
        removeContract: context => {
            context.commit('removeContract')
        },

        /* Call getContract mutation */
        getContract: context => {
            context.commit('getContract')
        },

        /* Call getContracts mutation */
        getContracts: context => {
            context.commit('getContracts')
        },
        getBookings: context => {
            context.commit('getBookings')
        },

        /* Call updateContract mutation */
        updateContract: context => {
            context.commit('updateContract')
        },

        /**************** Actions about Airlines **************/

        /* Call getAirlines mutation */
        getAirlines: context => {
            context.commit('getAirlines')
        },
        /* Call getReservation mutation */
        getReservation: context => {
            context.commit('getReservation')
        },

        /**************** Actions about login **************/

        /* Call auth mutation */
        auth: context => {
            context.commit('auth')
        },
        authentification: context => {
            context.commit('authentification')
        },
        register: context => {
            context.commit('register')
        }

}
export default actions


