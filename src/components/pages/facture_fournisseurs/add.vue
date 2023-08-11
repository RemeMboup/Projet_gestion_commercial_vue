<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="commande.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="client:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="commande.client">
      <option v-for="item in clients" :key="item.id" :value="item.id">{{item.prenom+ ' ' +item.nom }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="add" variant="primary">Add</b-button>
      <b-button  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        commande: {
            numero: '',
            client: '',
            
        }
      
      }
    },
    mounted: function () {
      //this.$store.dispatch('getAllClients')
       
    },
    computed: {
        clients: function () {
          return this.$store.getters.all_clients
        }
    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addCommande', { 
              numero: this.commande.numero ,
              client: this.commande.client,
                           
          })
          this.$router.push('/index_commande')
      },
      cancel () {
        this.commande.numero = '';
        this.commande.client = '';
       
    }
    },
  }
</script>

