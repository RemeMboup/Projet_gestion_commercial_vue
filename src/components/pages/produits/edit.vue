<template>

  <div>
   
    <b-form>
     
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="selected_produit.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Categorie:"
                    label-for="exampleInput2">
      <b-form-select  class="form-control m-input" v-model="selected_produit.categorie">
      <option v-for="item in categories" :key="item.id" :value="item.id">{{item.nom}}</option>
      </b-form-select> 
         
      </b-form-group>
      <b-button @click="updateProduit" variant="primary">Submit</b-button>
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
      this.$store.dispatch('getAllCategories')
       
    },
   
    computed: {
        selected_produit: function () {
            return this.$store.getters.selected_produit
        },
        categories: function () {
          return this.$store.getters.all_categories
        }



    }, 

    methods: {
        updateProduit() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateProduit',this.selected_produit)
            this.$router.push('/index_produit')
        },
        cancel () {
            this.$router.push('/index_produit')
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
