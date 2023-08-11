<template>
<div>
  <div class="columns medium-3">
  <div class="card" id="card_reser">
    <div class="card-divider">
        <h4><p>Scheduling Change</p></h4>
     PNR:{{schedchange.pnr}}
     
    </div>
    <div class="card-section">
      DK:{{schedchange.dk}}</br>
      CC_Agent:{{schedchange.cc_agent}}</br>
      T_PCC:{{schedchange.t_pcc}}</br>
      Status:{{schedchange.status}}</br>
      Pax_Names:{{schedchange.pax_names}}</br>
      Is_Ticket:{{schedchange.is_ticket}}</br>
      
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
    computed: {

      /* This follows methods retrieve data from store which become availables in this views */
    schedchange () {
            return this.$store.state.schedchange
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


