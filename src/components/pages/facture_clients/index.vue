<template>
<div>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="facture_client.numero"
                      required
                      placeholder="Enter Numero">
        </b-form-input>
      </b-form-group>
      
      <b-button @click="searchFacture_client" variant="primary">Go</b-button>

    </b-form>
  </div>
 
  </div>
</template>
<script>


  export default {
    data () {
        return {
            facture_client: {
               numero:'',  
            },
      }
    },
   
    computed: {
      search_facture_client: function () {
        return this.$store.getters.facture_clients_from_search
      }



    }, 

    methods: {
      searchFacture_client(){
          this.isSearchairlinecontract = true
            this.$store.dispatch('getDetailFacture_client', {
              numero: this.facture_client.numero
            });
            this.$router.push('/invoice')
        this.isSearchairlinecontract =  false
      }
    }
   
}
</script>

<style>
  #generalSearch{
    margin-left: 350px;
  }
  .btn-brand{
    margin-left: 15px;
  }
</style>
