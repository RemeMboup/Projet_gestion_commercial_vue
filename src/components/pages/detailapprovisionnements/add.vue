<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="detail_approvisionnement.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Quantite:"
                    label-for="exampleInput2">
        <b-form-input id="quantite"
                      type="text"
                      v-model="detail_approvisionnement.quantite"
                      required
                      placeholder="Quantite">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prix_Htva:"
                    label-for="exampleInput2">
        <b-form-input id="prix_htva"
                      type="text"
                      v-model="detail_approvisionnement.prix_htva"
                      required
                      placeholder="Prix_Htva">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="approvisionnement:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="detail_approvisionnement.approvisionnement.id">
      <option v-for="item in approvisionnements" :key="item.id[0]" :value="item.id[0]">{{item.id }}</option>
     
      </b-form-select>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="produit:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="detail_approvisionnement.produit.id">
      <option v-for="item in produits" :key="item.id[0]" :value="item.id[0]">{{item.id }}</option>
     
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
        detail_approvisionnement: {
            numero: '',
            quantite: '',
            prix_htva: '',
            approvisionnement: [1],
            produit: [1]
            
        }
      
      }
    },
    mounted: function () {
      this.$store.dispatch('getAllApprovisionnements')
      this.$store.dispatch('getAllProduits')
       
    },
    computed: {
        approvisionnements: function () {
          return this.$store.getters.all_approvisionnements
        },
        produits: function () {
          return this.$store.getters.all_produits
        },
    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addDetail_approvisionnement', { 
              numero: this.detail_approvisionnement.numero ,
              quantite: this.detail_approvisionnement.quantite ,
              prix_htva: this.detail_approvisionnement.prix_htva ,
              approvisionnement: this.detail_approvisionnement.approvisionnement ,
              produit: this.detail_approvisionnement.produit,
                           
          })
          this.detail_approvisionnement.produit[1].stock = this.detail_approvisionnement.produit[1].stock + this.detail_approvisionnement.quantite
          console.log(this.detail_approvisionnement.produit)
          this.$router.push('/index_detailapprovisionnement')
      },
      cancel () {
        this.detail_approvisionnement.numero = '';
        this.detail_approvisionnement.quantite = '';
        this.detail_approvisionnement.prix_htva = '';
        this.detail_approvisionnement.approvisionnement = '';
        this.detail_approvisionnement.produit = '';
       
       
    }
    },
  }
</script>

