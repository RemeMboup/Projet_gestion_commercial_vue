<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="selected_detail_commande.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Quantite:"
                    label-for="exampleInput2">
        <b-form-input id="quantite"
                      type="text"
                      v-model="selected_detail_commande.quantite"
                      required
                      placeholder="Quantite">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prix_Htva:"
                    label-for="exampleInput2">
        <b-form-input id="prix_htva"
                      type="text"
                      v-model="selected_detail_commande.prix_htva"
                      required
                      placeholder="Prix_Htva">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="commande:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_detail_commande.commande">
      <option v-for="item in commandes" :key="item.id" :value="item.id">{{item.id}}</option>
     
      </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="produit:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_detail_commande.produit">
      <option v-for="item in produits" :key="item.id" :value="item.id">{{item.id}}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="updateDetail_commande" variant="primary">Update</b-button>
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
      this.$store.dispatch('getAllCommandes')
      this.$store.dispatch('getAllProduits')
       
    },
   
    computed: {
        selected_detail_commande: function () {
            return this.$store.getters.selected_detail_commande
        },
        commandes: function () {
          return this.$store.getters.all_commandes
        },
        produits: function () {
          return this.$store.getters.all_produits
        }
    }, 

    methods: {
        updateDetail_commande() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateDetail_commande',this.selected_detail_commande)
            this.$router.push('/index_detailcommande')
        },
        cancel () {
            this.$router.push('/index_detailcommande')
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
