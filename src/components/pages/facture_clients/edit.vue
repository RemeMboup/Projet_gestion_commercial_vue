<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="selected_facture_client.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="client:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_facture_client.commande">
      <option v-for="item in Detail_commandes" :key="item.id" :value="item.id">{{item.id }}</option>
     
      </b-form-select>
      </b-form-group>
       <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="selected_facture_client.montant"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
       <b-form-group id="exampleInputGroup2"
                    label="Updated_by:"
                    label-for="exampleInput2">
        <b-form-input id="updated_by"
                      type="text"
                      v-model="selected_facture_client.updated_by"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-button @click="updateFacture_client" variant="primary">Update</b-button>
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
      this.$store.dispatch('getAllDetail_commandes')
       
    },
   
    computed: {
        selected_facture_client: function () {
            return this.$store.getters.selected_facture_client
        },
        Detail_commandes: function () {
          return this.$store.getters.all_facture_clients
        }


    }, 

    methods: {
        updateFacture_client() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updatefacture_client',this.selected_facture_client)
            this.$router.push('/index_facture_client')
        },
        cancel () {
            this.$router.push('/index_facture_client')
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
