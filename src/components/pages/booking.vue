<template>
<div>
  <!-- Load icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <!-- The form -->
<form class="example">
  <input type="text" placeholder="Search.." v-model="booking.BOOKINGNO">
  <button  @click="getBooking(booking.BOOKINGNO)"><i class="fa fa-search"></i></button>
</form>
  <div class="m-table" style="overflow-x:auto;">
  <table class="table is-bordered is-striped is-narrow">
  <thead>
    <tr>
     
      <th>VALIDAL</th>
      <th>INVOICENUMBER</th>
      <th>SUBMITTO_LINKCODE</th>
      <th>BASE_FARE</th>
      <th>BOOKINGNO</th>
      <th>INVOICETYPE_LINK</th>
      <th>TAX</th>
      <th>TICKETTYPE_LINKNO</th>
      <th>CLIENTPAYSTATUS_LINKCODE</th>
      <th>RECORDlOCATOR</th>
      <th>COM</th>
      <th>TRAVELTYPE_LINKNO</th>
      <th>ARC_LINKNO</th>
      <th>PASSENGERNAME</th>
      <th>TOTAL</th>
      <th>ISSUEDATE</th>
      <th>TKT_NUMBER</th>
    </tr>
  </thead>
  
  <tbody>
    <router-link to="booking_details">
    <tr v-for="(booking, BOOKINGNO) in bookings"v-bind:key="booking.BOOKINGNO">
      <td>{{booking.VALIDAL}}</td></b>
      <td>{{booking.INVOICENUMBER}}</td></b>
      <td>{{booking.SUBMITTO_LINKCODE}}</td></b>
      <td>{{booking.BASE_FARE}}</td></b>
      <td>{{booking.BOOKINGNO}}</td></b>
      <td>{{booking.INVOICETYPE_LINK}}</td></b>
      <td>{{booking.TAX}}</td></b>
      <td>{{booking.TICKETTYPE_LINKNO}}</td></b>
      <td>{{booking.CLIENTPAYSTATUS_LINKCODE}}</td></b>
      <td>{{booking.RECORDlOCATOR}}</td></b>
      <td>{{booking.COM}}</td></b>
      <td>{{booking.TRAVELTYPE_LINKNO}}</td></b>
      <td>{{booking.ARC_LINKNO}}</td></b>
      <td>{{booking.PASSENGERNAME}}</td></b>
      <td>{{booking.TOTAL}}</td></b>
      <td>{{booking.ISSUEDATE}}</td></b>
      <td>{{booking.TKT_NUMBER}}</td></b>
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
        this.$store.dispatch('getBookings')
       
    },


    computed: {
        /* This follows methods retrieve data from store which become availables in this views */
        
        bookings () {
            return this.$store.state.bookings
        },
        booking () {
            return this.$store.state.BOOKING
        }
    },
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
