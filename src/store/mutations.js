import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from '../store/actions';
//import state from '../store/store';
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let mutations = {
    left_menu(state, option) {
        if (option == "open") {
            state.left_open = true
        } else if (option == "close") {
            state.left_open = false
        } else if (option == "toggle") {
            state.left_open = !state.left_open
        }
        if (state.left_open) {
            document.getElementsByTagName("body")[0].classList.remove("left-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left-hidden")
        }
    },
    left1_menu(state, option) {
        if (option == "open") {
            state.left_open = true
        } else if (option == "close") {
            state.left_open = false
        } else if (option == "toggle") {
            state.left_open = !state.left_open
        }
        if (state.left_open) {
            document.getElementsByTagName("body")[0].classList.remove("left1-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left1-hidden")
        }
    },
    rightside_bar(state, option) {
        if (option == "open") {
            state.right_open = true
        } else if (option == "close") {
            state.right_open = false
        } else if (option == "toggle") {
            state.right_open = !state.right_open
        }
        if (state.right_open) {
            document.getElementsByTagName("body")[0].classList.add("sidebar-right-opened")
        } else {
            document.getElementsByTagName("body")[0].classList.remove("sidebar-right-opened")
        }
    },
    routeChange(state, loader) {
        if (loader == "start") {
            state.preloader = true
        } else if (loader == "end") {
            state.preloader = false
        }
    },
    /* This method add a new customer */
    addCustomer: state => {
        console.log("Hello")
        axios({
            url: state.baseUrl + '/customers/',
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + state.token
            },
            data: {
                agency_id: state.customer.agency_id,
                interface_id: state.customer.interface_id,
                name: state.customer.name,
                city: state.customer.city,
                state: state.customer.state,
                country: state.customer.country,
                address1: state.customer.address1,
                address2: state.customer.address2,
                zip_code: state.customer.zip_code,
                customer_type: state.customer.customer_type,
                group: state.customer.group
                
            }
        })
    },

    /* This method update the customer which id is given */
    updateCustomer: (state, id) => {
        axios({
            url: state.baseUrl + '/customers/' +state.customer.id+'/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + state.token
            },
            data: {
                id:state.customer.id,
                agency_id: state.customer.agency_id,
                name: state.customer.name,
                city: state.customer.city,
                state: state.customer.state,
                country: state.customer.country,
                address1: state.customer.address1,
                address2: state.customer.address2,
                zip_code: state.customer.zip_code,
                customer_type: state.customer.customer_type,
                interface_id: state.customer.interface_id,
                group: state.customer.group
            }
        }).then(response => {
            console.log(response)
            console.log('Update')
        }).catch(error => {
            console.log(error)
        })
    },

    /* Retrieve the customer which id is given */
    getCustomer: (state, id) => {
        axios({
            url: 'http://52.151.59.23/api/crm/customers/'+state.customer.id +'/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            state.customer = response.data
            this.$router.push('/edit_customer')
        }).catch(error => {
            console.log(error)
        })
    },

    /* Retrieve all customers */
    getCustomers: (state, dkNameCellPhAddrr) => {
        axios({
            url: state.baseUrl + '/customers/' + '?q='+ dkNameCellPhAddrr,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            state.customers = response.data
        }).catch(error => {
            console.log(error)
        })
    },

    /* Delete the customer which id is given */
    removeCustomer: (state, id) => {
        axios({
            url: state.baseUrl + '/customers/'+state.customer.id +'/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            console.log('Deleted')
        }).catch(error => {
            console.log(error)
        })
    },

    /* Retrieve all affliates */
    getAffliates: state => {
        axios({
            url: state.baseUrl + '/affiliates/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' +state.token
            }
        }).then(response => {
            console.log(response)
            state.affliates = response.data
            console.log(state.affliates)
        }).catch(error => {
            console.log(error)
        })
    },

    /************************ Mutations about contracts *******************/

    /* Add a new contract */
    addContract: state => {
        axios({
            url: state.baseUrl + '/basecontracts/',
            method: 'post',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + state.token
            },
            data: {

                contract_type: state.contract.contract_type,
                name: state.contract.name,
                owrt: state.contract.owrt,
                from_base_amt: state.contract.from_base_amt,
                from_com_amt: state.contract.from_com_amt,
                from_total_amt: state.contract.from_total_amt,
                to_base_amt: state.contract.to_base_amt,
                to_total_amt: state.contract.to_total_amt,
                to_com_amt: state.contract.to_com_amt,
                class_svc: state.contract.class_svc,
                ret_until: state.contract.ret_until,
                x_origin: state.contract.x_origin,
                x_destination: state.contract.x_destination,
                issued_until: state.contract.issued_until,
                dep_until: state.contract.dep_until,
                origin: state.contract.origin,
                destination: state.contract.destination,
                issued_from: state.contract.issued_from,
                dep_from: state.contract.dep_from,
                ret_from: state.contract.ret_from,
                fare_basis: state.contract.fare_basis,
                tour_code: state.contract.tour_code,
                tkt_designator: state.contract.tkt_designator,
                flight_no: state.contract.flight_no,
                inbound_flight: state.contract.inbound_flight,
                outbound_flight: state.contract.outbound_flight,
                issued_from_blackout: state.contract.issued_from_blackout,
                issued_until_blackout: state.contract.issued_until_blackout,
                dep_from_blackout: state.contract.dep_from_blackout,
                dep_until_blackout: state.contract.dep_until_blackout,
                ret_until_blackout: state.contract.ret_until_blackout,
                ret_from_blackout: state.contract.ret_from_blackout,
                pax_type: state.contract.pax_type,
                arc_no: state.contract.arc_no,
                via_points: state.contract.via_points,
                x_via_points: state.contract.x_via_points,
                seasonality: state.contract.seasonality,
                trip_type: state.contract.trip_type,
                mrd_type: state.contract.mrd_type,
                airline: state.contract.airline
            }
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    },

    /* Remove the contract which id is given */
    removeContract: (state, id) => {
        axios({
            url: state.baseUrl + '/basecontracts/' +state.contract.id+ '/',
            method: 'delete',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            console.log('Contract Deleted')
        }).catch(error => {
            console.log(error)
        })
    },

    /* Retrieve the contract which id is given */
    getContract: (state, id) => {
        axios({
            url: state.baseUrl + '/basecontracts/'+ state.contract.id+ '/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            state.contract = response.data
            this.$router.push('/edit_contract')
        }).catch(error => {
            console.log(error)
        })
    },
    getBookings: state => {
        console.log('I am there!')
        axios({
            url: 'http://cosmo.com.ngrok.io/api/data/',
            method: 'get',
        }).then(response => {
            console.log(response)
            state.bookings = response.data
            console.log(state.bookings)
        }).catch(error => {
            console.log(error)
        })

    },

    /* Retrieve all contracts */
    getContracts: state => {
        axios({
            url: state.baseUrl + '/basecontracts/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            }
        }).then(response => {
            console.log(response)
            state.contracts = response.data
        }).catch(error => {
            console.log(error)
        })
    },

    /* Update the contract which id is given */
    updateContract: (state, id) => {
        axios({
            url: state.baseUrl + '/basecontracts/' +state.contract.id+'/',
            method: 'put',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer '+ state.token
            },
            data: {
                id: state.contract.id,
                contract_type: state.contract.contract_type,
                name: state.contract.name,
                owrt: state.contract.owrt,
                from_base_amt: state.contract.from_base_amt,
                from_com_amt: state.contract.from_com_amt,
                to_base_amt: state.contract.to_base_amt,
                to_total_amt: state.contract.to_total_amt,
                to_com_amt: state.contract.to_com_amt,
                class_svc: state.contract.class_svc,
                ret_until: state.contract.ret_until,
                x_origin: state.contract.x_origin,
                x_destination: state.contract.x_destination,
                issued_until: state.contract.issued_until,
                dep_until: state.contract.dep_until,
                origin: state.contract.origin,
                destination: state.contract.destination,
                issued_from: state.contract.issued_from,
                dep_from: state.contract.dep_from,
                ret_from: state.contract.ret_from,
                fare_basis: state.contract.fare_basis,
                tour_code: state.contract.tour_code,
                tkt_designator: state.contract.tkt_designator,
                flight_no: state.contract.flight_no,
                inbound_flight: state.contract.inbound_flight,
                outbound_flight: state.contract.outbound_flight,
                issued_from_blackout: state.contract.issued_from_blackout,
                issued_until_blackout: state.contract.issued_until_blackout,
                dep_from_blackout: state.contract.dep_from_blackout,
                dep_until_blackout: state.contract.dep_until_blackout,
                ret_until_blackout: state.contract.ret_until_blackout,
                ret_from_blackout: state.contract.ret_from_blackout,
                pax_type: state.contract.pax_type,
                arc_no: state.contract.arc_no,
                via_points: state.contract.via_points,
                x_via_points: state.contract.x_via_points,
                seasonality: state.contract.seasonality,
                trip_type: state.contract.trip_type,
                mrd_type: state.contract.mrd_type,
                airline: state.contract.airline
            }
        }).then(response => {
            console.log(response)
            console.log('Contract Updated')
        }).catch(error => {
            console.log(error)
        })
    },

    /************************ Mutations about airlines *******************/

    /* this method returns all airlines */
    getAirlines: state => {
        axios({
            url: state.baseUrl + '/airlines/',
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + state.token
            }
        }).then(response => {
            console.log(response)
            state.airlinesList = response.data
            console.log(state.airlinesList)
        }).catch(error => {
            console.log(error)
        })
    },
    auth: state => {
        axios({
            url: state.baseUrl + '/authentification/',
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                username: state.login.username,
                password: state.login.password
            }
        }).then(response => {
            console.log(response)
            state.token = response.data.token
            console.log(state.token)

            if (state.token !== '') {
                state.isAuthenticated = true
                this.$router.push('/reservations')
            } else {
                console.log('Login or Password incorrect!')
                state.login.username = ''
                state.login.password = ''
            }

        }).catch(error => {
            console.log(error)
        })
    },
    authentification: state => {
        axios({
            url: state.baseUrl + '/account/token/',
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            data: {
                email: state.login3.email,
                password: state.login3.password
            }
        }).then(response => {
            console.log(response)
            let token =localStorage('token')
            state.token = response.data.token
            localStorage.setItem('token', token)
            console.log(state.token)

            if (state.token !== '') {
                state.isAuthenticated = true
                //this.$router.push('/scheduling_change')
                this.$router.push('/reservations')
            } else {
                console.log('Login or Password incorrect!')
                state.login3.email = ''
                state.login3.password = ''
            }

        }).catch(error => {
            console.log(error)
        })
    },
    // Search customer by keyword(dk, name, cell phone and address)
    getSchedChange: (state, dk) => {
        axios({
            url: this.$store.state.baseUrl + '/api/gds/schedchance/?dk=' + dk,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + this.$store.state.baseUrl.token
            }
        }).then(response => {
            console.log(response)
            this.$store.state.schedchanges = response.data
        }).catch(error => {
            console.log(error)
        })

    if (this.$store.state.schedchanges = []) {
        console.log('Not Fields Founds!')
    }
    },
    /* these methods call the respectives actions from the store */
    getReservation: (state, interface_id) => {
        console.log(state.token)
        console.log('I am there!')
        axios({
            url: 'http://52.151.59.23/api/gds/reservations/?dk='+state.reservation.interface_id,
            method: 'get',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            console.log(response)
            state.reservation = response.data[0]
            console.log(state.reservation)
        }).catch(error => {
            console.log(error)
        })

    },

}
export default mutations
//http://192.168.1.100:5050/api/affiliates
// url: state.baseUrl + '/api/gds/account/token/',
