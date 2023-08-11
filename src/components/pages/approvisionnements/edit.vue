<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="selected_approvisionnement.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Fournisseur:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_approvisionnement.fournisseur">
      <option v-for="item in fournisseurs" :key="item.id" :value="item.id">{{item.prenom+ ' ' +item.nom }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="updateApprovisionnement" variant="primary">Update</b-button>
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
      this.$store.dispatch('getAllFournisseurs')
       
    },
   
    computed: {
        selected_approvisionnement: function () {
            return this.$store.getters.selected_approvisionnement
        },
        fournisseurs: function () {
          return this.$store.getters.all_fournisseurs
        }


    }, 

    methods: {
        updateApprovisionnement() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateApprovisionnement',this.selected_approvisionnement)
            this.$router.push('/index_approvisionnement')
        },
        cancel () {
            this.$router.push('/index_approvisionnement')
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
