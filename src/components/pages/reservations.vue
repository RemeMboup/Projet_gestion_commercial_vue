<template>
<div>
  <!-- Load icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The form -->
<form class="example">
  <input type="text" placeholder="Search.." name="search" v-model="reservation.interface_id">
  <button type="submit"  @click="getReservation(reservation.interface_id)"><i class="fa fa-search"></i></button>
</form>
  <div class="m-table" style="overflow-x:auto;">
  <table class="table is-bordered is-striped is-narrow">
  <thead>
    <tr>
      <th>Pnr</th>
      <th>Ticketing_pcc</th>
      <th>Ticketing_agent</th>
      <th>FirstName</th>
      <th>Ticket Number</th>
      <th>Payement Card</th>
      <th>Create Pcc</th>
      <th>Create Agent</th>
      <th>Agent Pcc</th>
      <th>Carrier</th>
      <th>Validating Carrier</th>
      <th>Class Of Service</th>
      <th>Departure Date</th>
      <th>Origin</th>
      <th>Destination</th>
    </tr>
  </thead>
  <tbody>
    <router-link to="reservation_ticket">
    <tr>
      <td>{{reservation.pnr}}</td>
      <td>{{reservation.ticketing_pcc}}</td>
      <td>{{reservation.ticketing_agent}}</td>
      <td>{{reservation.passengers.first_name}}</td>
      <td>{{reservation.passengers.tkt_number}}</td>
      <td>{{reservation.payement_card}}</td>
      <td>{{reservation.create_pcc}}</td>
      <td>{{reservation.create_agent}}</td>
      <td>{{reservation.agent_pcc}}</td>
      <td>{{reservation.carriers}}</td>
      <td>{{reservation.validating_carrier}}</td>
      <td>{{reservation.class_of_service}}</td>
      <td>{{reservation.departure_date}}</td>
      <td>{{reservation.origin}}</td>
      <td>{{reservation.destination}}</td>
    </tr>
    
    </router-link>
  </tbody>
</table>

</div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  mounted: function () {
    console.log(this.$store.state.token)
    this.$store.dispatch('getReservation')
  },

    computed: {
        /* This follows methods retrieve data from store which become availables in this views */
        
        reservation () {
            return this.$store.state.reservation
        },
        interface_id () {
            return this.$store.state.reservation.interface_id
        }
    },

    methods: {
      /* these methods call the respectives actions from the store */
      getReservation (interface_id) {
          this.$store.dispatch('getReservation')
    },
    }
}
</script>
<style>
tr:nth-child(even) {
    background-color: #f2f2f2
}
/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
