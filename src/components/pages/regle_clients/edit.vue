<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="selected_commande.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="client:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_commande.client">
      <option v-for="item in clients" :key="item.id" :value="item.id">{{item.prenom+ ' ' +item.nom }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="updateCommande" variant="primary">Update</b-button>
      <b-button @click="cancel" variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>


  export default {
    data () {
        return {
        }
    },
    mounted: function () {
      this.$store.dispatch('getAllClients')
       
    },
   
    computed: {
        selected_commande: function () {
            return this.$store.getters.selected_commande
        },
        clients: function () {
          return this.$store.getters.all_clients
        }


    }, 

    methods: {
        updateCommande() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateCommande',this.selected_commande)
            this.$router.push('/index_commande')
        },
        cancel () {
            this.$router.push('/index_commande')
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
