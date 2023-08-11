<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Nom Produit:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="categorie.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Update_by"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="categorie.created_by"
                      required
                      placeholder="Update_by">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Created_by:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="categorie.updated_by"
                      required
                      placeholder="Created_by">
        </b-form-input>
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
        categorie: {
            nom: '',
            created_by: '',
            updated_by: '',
        }
      
      }
    },
    mounted: function () {
      this.$store.dispatch('getAllCategories')
       
    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addCategorie', { 
              nom: this.categorie.nom ,
              updated_by: this.categorie.updated_by ,
              created_by: this.categorie.created_by              
          })
          this.$router.push('/index_categorie')
      },
      cancel () {
        this.categorie.nom = '';
        this.categorie.updated_by = '';
        this.categorie.created_by = ''
    }
    },
  }
</script>

