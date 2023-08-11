<template>
<div>
  <div class="columns medium-3">
  <div class="card" id="card_reser">
    <div class="card-divider">
        <h4><p>Reservation</p></h4>
     PNR:{{ reservation.pnr }}
     
    </div>
    <div class="card-section">
      Origine:{{ reservation.origin }}

      Destination:{{ reservation.destination}}
     
      First_Name:{{ reservation.passengers.first_name}}
     
      
    </div>
  </div>
  <div class="card" id="card_ticket">
    <div class="card-divider">
         <h4><p> Ticketing</p></h4>
      Ticket_Number: {{reservation.passengers.tkt_number}}
      
    </div>
    <div class="card-section">
      Ticketing_PCC:{{reservation.ticketing_pcc}}
      
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
    computed: {

      /* This follows methods retrieve data from store which become availables in this views */
    reservation () {
        return this.$store.state.reservation
    },
    reservations () {
        return this.$store.state.reservations
    }
    
    }  
    
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

