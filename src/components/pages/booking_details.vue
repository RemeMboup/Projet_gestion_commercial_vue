<template>
<div>
  <div class="columns medium-3">
  <div class="card" id="card_reser">
    <div class="card-divider">
        <h4><p>Booking</p></h4>
    </div>
    <div class="card-section">
      VALIDAL:{{booking.VALIDAL}}</br>
      INVOICENUMBER:{{booking.INVOICENUMBER}}</br>
      SUBMITTO_LINKCODE:{{booking.SUBMITTO_LINKCODE}}</br>
      BASE_FARE:{{booking.BASE_FARE}}</br>
      BOOKINGNO:{{booking.BOOKINGNO}}</br>
      INVOICETYPE_LINK:{{booking.INVOICETYPE_LINK}}</br>
      VALIDAL:{{booking.TAX}}</br>
      TICKETTYPE_LINKNO:{{booking.TICKETTYPE_LINKNO}}</br>
      CLIENTPAYSTATUS_LINKCODE:{{booking.CLIENTPAYSTATUS_LINKCODE }}</br>
      COM:{{booking.COM}}</br>
      TRAVELTYPE_LINKNO:{{booking.TRAVELTYPE_LINKNO}}</br>
      ARC_LINKNO:{{booking.ARC_LINKNO }}</br>
      PASSENGERNAME:{{booking.PASSENGERNAME}}</br>
      TOTAL:{{booking.TOTAL}}</br>
      ISSUEDATE:{{booking.ISSUEDATE }}</br>
      TKT_NUMBER:{{booking.TKT_NUMBER}}</br>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
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
<style type="text/css" scoped>
.card_reser {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card_ticket {
   width:5px;
    height:5px;
    border:1px 
}

</style>

