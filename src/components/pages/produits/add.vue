<template>

  <div>
   
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Produit Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="produit.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Categorie:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="produit.categorie">
      <option v-for="item in categories" :key="item.id" :value="item.id">{{item.nom}}</option>
      </b-form-select> 
        
      </b-form-group>
      <b-button @click="add" variant="primary">Submit</b-button>
      <b-button  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        produit: {
            nom: '',
            categorie: '',
        }
      
      }
    },
    mounted: function () {
      this.$store.dispatch('getAllCategories')
       
    },
    computed: {
        categories: function () {
          return this.$store.getters.all_categories
        },
    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addProduit', { 
              nom: this.produit.nom ,
              //categorie: 10 ,
              categorie: this.produit.categorie,
              stock: 10 ,

                           
          })
          
          this.$router.push('/index_produit')
      },
      cancel () {
        this.produit.nom = '';
        this.produit.categorie = '';
    }
    },
  }
</script>

