<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="factureclient.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Detail_commande:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="factureclient.commande.id">
      <option v-for="item in all_detail_commandes" :key="item.id[0]" :value="item.id[0]">{{item.id }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="addFacture_client" variant="primary">Add</b-button>
      <b-button  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        factureclient: {
            numero: '',
            commande: [1,3,4],
            montant : ''
            
        }
      
      }
    },
    mounted: function () {
      //this.$store.dispatch('getAllDetail_commandes')
       
    },
    computed: {
        all_detail_commandes: function () {
          return this.$store.getters.all_detail_commandes
        }
    },
    methods: {
      
      addFacture_client() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addFacture_client', { 
              numero: this.factureclient.numero ,
              commande: [1,2,3],
              montant: this.factureclient.montant,
                           
          })
          this.$router.push('/index_facture_client')
      },
      cancel () {
        this.factureclient.numero = '';
        this.factureclient.commande = '';
       
    }
    },
  }
</script>

