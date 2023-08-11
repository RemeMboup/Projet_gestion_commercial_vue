<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="commande_detail.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Quantite:"
                    label-for="exampleInput2">
        <b-form-input id="quantite"
                      type="text"
                      v-model="commande_detail.quantite"
                      required
                      placeholder="Quantite">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prix_Htva:"
                    label-for="exampleInput2">
        <b-form-input id="prix_htva"
                      type="text"
                      v-model="commande_detail.prix_htva"
                      required
                      placeholder="Prix_Htva">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="commande:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="commande_detail.commande.id">
      <option v-for="item in commandes" :key="item.id[0]" :value="item.id[0]">{{item.id }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="produit:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="commande_detail.produit.id">
      <option v-for="item in produits" :key="item.id[0]" :value="item.id[0]">{{item.id }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-button @click="DetailAdd" variant="primary">Add_Detail</b-button>
      <b-button  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        commande_detail: {
            numero: '',
            quantite: '',
            prix_htva: '',
            commande: [1],
            produit: [1]
            
        }
      
      }
    },
    mounted: function () {
      this.$store.dispatch('getAllCommandes')
      this.$store.dispatch('getAllProduits')
       
    },
    computed: {
        commandes: function () {
          return this.$store.getters.all_commandes
        },
        produits: function () {
          return this.$store.getters.all_produits
        },
    },
    methods: {
      
      DetailAdd() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('DetailAdd', { 
              numero: this.commande_detail.numero ,
              quantite: this.commande_detail.quantite ,
              prix_htva: this.commande_detail.prix_htva ,
              commande: this.commande_detail.commande ,
              produit: this.commande_detail.produit,
                           
          })
          this.$router.push('/index_detailcommande')
      },
      cancel () {
        this.detail_commande.numero = '';
        this.detail_commande.quantite = '';
        this.detail_commande.prix_htva = '';
        this.detail_commande.commande = '';
        this.detail_commande.produit = '';
       
       
    }
    },
  }
</script>

