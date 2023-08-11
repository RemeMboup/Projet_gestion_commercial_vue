<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="selected_categorie.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
       
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Updated_by:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="selected_categorie.updated_by"
                      required
                      placeholder="Updated_by">
        </b-form-input>
      </b-form-group>
      <b-button @click="updateCategorie" variant="primary">Update</b-button>
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
       
    },
   
    computed: {
        selected_categorie: function () {
            return this.$store.getters.selected_categorie
        },


    }, 

    methods: {
        updateCategorie() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateCategorie',this.selected_categorie)
            this.$router.push('/index_categorie')
        },
        cancel () {
            this.$router.push('/index_categorie')
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
