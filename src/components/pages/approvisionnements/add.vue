<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="approvisionnement.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Fournisseur:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="approvisionnement.fournisseur">
      <option v-for="item in fournisseurs" :key="item.id" :value="item.id">{{item.prenom+ ' ' +item.nom }}</option>
     
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
        approvisionnement: {
            numero: '',
            fournisseur: '',
            
        }
      
      }
    },
    mounted: function () {
      this.$store.dispatch('getAllFournisseurs')
       
    },
    computed: {
        fournisseurs: function () {
          return this.$store.getters.all_fournisseurs
        }
    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addApprovisionnement', { 
              numero: this.approvisionnement.numero ,
              fournisseur: this.approvisionnement.fournisseur,
                           
          })
          this.$router.push('/index_approvisionnement')
      },
      cancel () {
        this.approvisionnement.numero = '';
        this.approvisionnement.fournisseur = '';
       
    }
    },
  }
</script>

