<template>
  <div>
    <div class="row">
        <div class="col-lg-12">
            <b-card no-body>
                <b-tabs ref="tabs" card >
                    <b-tab title="Form Action" active>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Contract
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                     </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">
                                           <div >

                    <label for="contractType">Contract Type</label><br>
                    <select name="contractType" id="" v-model="contract.contract_type" class="form-control">
                        <option v-for="option in contractType" v-bind:key="option.ct" v-bind:value="option.value">
                            {{option.ct}}
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" v-model="contract.name">
                </div>

                <div class="form-group">

                    <label for="ClassOfService">Class of Service</label><br>
                    <select name="ClassOfService" id="" v-model="contract.class_svc" class="form-control">
                        <option v-for="option in classOfService" v-bind:key="option.id" v-bind:value="option.c_csv">
                            {{option.c_csv}}
                        </option>
                    </select>

                </div>

                <div class="form-group">
                    <label for="tour_code">Tour Code</label>
                    <input type="text" class="form-control" v-model="contract.tour_code">
                </div>

                <div class="form-group">

                    <label for="paxtype">Passenger Type</label><br>
                    <select name="paxtype" id="" v-model="contract.pax_type" class="form-control">
                        <option v-for="option in passengerType" v-bind:key="option.id" v-bind:value="option.paxtype">
                            {{option.paxtype}}
                        </option>
                    </select>

                </div>

                <div class="form-group">

                    <label for="mrdType">Markup Reward or Dropnet</label><br>
                    <select name="mrdType" id="" v-model="contract.mrd_type" class="form-control">
                        <option v-for="option in markupRewardDropnet" v-bind:key="option.mrd" v-bind:value="option.value">
                            {{option.mrd}}
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="trip_type">Trip Type</label>
                    <input type="text" class="form-control" v-model="contract.trip_type">
                </div>

                <div class="form-group">
                    <label for="seasonality">Seasonality</label>
                    <input type="text" class="form-control" v-model="contract.seasonality">
                </div>

                </form>
                </div>
              </div>
              </div>
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Contract
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                     </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">
                                        <div class="form-group">
                    <label for="x_origin">Exluded Origins</label>
                    <input type="text" class="form-control" v-model="contract.x_origin">
                </div>

                <div class="form-group">
                    <label for="x_destination">Exluded Destinations</label>
                    <input type="text" class="form-control" v-model="contract.x_destination">
                </div>

                <div class="form-group">
                    <label for="origin">Origin</label>
                    <input type="text" class="form-control" v-model="contract.origin">
                </div>

                <div class="form-group">
                    <label for="destination">Destination</label>
                    <input type="text" class="form-control" v-model="contract.destination">
                </div>

                <div class="form-group">
                    <label for="dep_from">Departure From</label>
                    <input type="date" class="form-control" v-model="contract.dep_from">
                </div>
                <div class="form-group">
                    <label for="dep_from">Departure From Blackout</label>
                    <input type="date" class="form-control" v-model="contract.dep_from_blackout">
                </div>
                <div class="form-group">
                    <label for="dep_from">Return From Blackout</label>
                    <input type="date" class="form-control" v-model="contract.ret_from_blackout">
                </div>

                <div class="form-group">
                    <label for="ret_from">Return From</label>
                    <input type="date" class="form-control" v-model="contract.ret_from">
                </div>

                <div class="row form-group">
                            <div class="col-md-3">
                                <label class="control-label float-md-right txt_media1">
                                    One Way Round Trip
                                </label>

                            </div>
                            <div class="col-md-9">
                                <b-form-radio-group v-model="contract.owrt" :options="oneWayRoundTrip" class="inlineRadio">
                                </b-form-radio-group>
                            </div>
                   </div>
                <div class="form-group">
                    <label for="via_points">Via Points</label>
                    <input type="text" class="form-control" v-model="contract.via_points">
                </div>

                <div class="form-group">
                    <label for="x_via_points">Excluded Via Points</label>
                    <input type="text" class="form-control" v-model="contract.x_via_points">
                </div>

                </form>
                </div>
              </div>
              </div>
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Contract
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                     </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">
                                        <div class="form-group">
                    <label for="from_base_amt">From Base Amount</label>
                    <input type="text" class="form-control" v-model="contract.from_base_amt">
                </div>

                <div class="form-group">
                    <label for="from_com_amt">From Commission Amount</label>
                    <input type="text" class="form-control" v-model="contract.from_com_amt">
                </div>

                <div class="form-group">
                    <label for="to_base_amt">To Base Amount</label>
                    <input type="text" class="form-control" v-model="contract.to_base_amt">
                </div>

                <div class="form-group">
                    <label for="to_total_amt">To Total Amount</label>
                    <input type="text" class="form-control" v-model="contract.to_total_amt">
                </div>

                <div class="form-group">
                    <label for="to_com_amt">To Commission Amount</label>
                    <input type="text" class="form-control" v-model="contract.to_com_amt">
                </div>

                <div class="form-group">
                    <label for="fare_basis">Fare Basis</label>
                    <input type="text" class="form-control" v-model="contract.fare_basis">
                </div>
                </form>
                </div>
              </div>
              </div>
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Contract
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                     </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">
                                           <div class="form-group">
                    <label for="ret_until">Return until</label>
                    <input type="date" class="form-control" v-model="contract.ret_until"/>
                </div>
                <div class="form-group">
                    <label for="dep_until">Departure until</label>
                    <input type="date" class="form-control"  v-model="contract.dep_until"/>
                </div>
                <div class="form-group">
                    <label for="issued_until">Issued until</label>
                    <input type="date" class="form-control"  v-model="contract.issued_until"/>
                </div>
                <div class="form-group">
                    <label for="ret_until_blackout">Return until blackout</label>
                    <input type="date" class="form-control" v-model="contract.ret_until_blackout"/>
                </div>
                <div class="form-group">
                    <label for="dep_until_blackout">Departure until blackout</label>
                    <input type="date" class="form-control" v-model="contract.dep_until_blackout"/>
                </div>

                <div class="form-group">
                    <label for="issued_until_blackout">Issued until blackout</label>
                    <input type="date" class="form-control" v-model="contract.issued_until_blackout"/>
                </div>

                <div class="form-group">
                    <label for="issued_from_blackout">Issued from blackout</label>
                    <input type="date" class="form-control" v-model="contract.issued_from_blackout"/>
                </div>

                <div class="form-group">
                    <label for="issued_from">Issued from</label>
                    <input type="date" class="form-control" v-model="contract.issued_from"/>
                </div>
                </form>
                </div>
              </div>
              </div>
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Contract
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                     </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">

                                          <div class="form-group">
                    <label for="flight_no">Flight Number</label>
                    <input type="text" class="form-control" v-model="contract.flight_no">
                </div>

                <div class="form-group">
                    <label for="inbound_flight">Inbound Flights</label>
                    <input type="text" class="form-control" v-model="contract.inbound_flight">
                </div>

                <div class="form-group">
                    <label for="outbound_flight">Outbound Flights</label>
                    <input type="text" class="form-control" v-model="contract.outbound_flight">
                </div>
                <div class="form-group">
           
                    <label for="airlines">Airlines</label><br>
                    <select name="airlines" id="" v-model="contract.airline">
                        <option v-for="option in airlinesList" v-bind:key="option.id" v-bind:value="option.id">
                            {{option.name}}({{option.code_iata}})
                        </option>
                        
                </select>
            </div></b>
          <div>
            <v-btn
            @click="updateContract(contract.id)"
            color="green"
            outline>Update</v-btn>
        </div>
        <div>
            <v-btn
            @click="removeContract(contract.id)"
            color="green"
            outline>Delete</v-btn>
        </div>
            
                </form>
                </div>
              </div>
              </div>

            </div>
          </b-tab>
      </b-tabs>
      </b-card>
    </div>
    </div>
</div>
                        
</template>
<script>
    import Vue from 'vue'
    import VueFormWizard from 'vue-form-wizard'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    export default {


        /* returns  all Customers when the component is
       ** mounted by calling getCustomers and getAirlines  actions from the store
       */
        mounted: function () {
            console.log(this.$store.state.token)
            this.$store.dispatch('getAirlines')
        },

        computed: {

            /* This follows methods retrieve data from store which become availables in this views */
            contract() {
                return this.$store.state.contract
            },
            contractType() {
                return this.$store.state.contractType
            },
            classOfService() {
                return this.$store.state.classOfService
            },
            passengerType() {
                return this.$store.state.passengerType
            },
            markupRewardDropnet() {
                return this.$store.state.markupRewardDropnet
            },
            airlinesList() {
                return this.$store.getters.airlinesList
            },
            oneWayRoundTrip() {
              return this.$store.state.oneWayRoundTrip
            }
        },

        methods: {

            /* these methods call the respectives actions from the store */
            addContract () {
                this.$store.dispatch('addContract')
            },
            getContract (id) {
                this.$store.dispatch('getContract')
            },
            removeContract (id) {
                this.$store.dispatch('removeContract')
            },
            updateContract (id) {
                this.$store.dispatch('updateContract')
            },
            
        }
    }
</script>
<style src="../../assets/css/custom_css/vuewizard.css"></style>
