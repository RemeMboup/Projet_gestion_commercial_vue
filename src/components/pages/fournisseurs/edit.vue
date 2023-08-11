<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input
                      v-model="fournisseur.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prenom:"
                    label-for="exampleInput2">
        <b-form-input id="prenom"
                      type="text"
                      v-model="fournisseur.prenom"
                      required
                      placeholder="Enter prenom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Address:"
                    label-for="exampleInput2">
        <b-form-input id="adresse"
                      type="text"
                      v-model="fournisseur.adresse"
                      required
                      placeholder="Enter address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Tel:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="fournisseur.tel"
                      required
                      placeholder="Enter tel">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="fournisseur.email"
                      required
                      placeholder="Your Email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="fournisseur.created_by"
                      required
                      placeholder="Update_by">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="fournisseur.updated_by"
                      required
                      placeholder="Created_by">
        </b-form-input>
      </b-form-group>
      <b-button @click="updateFournisseur()" variant="primary">Update</b-button>
      <b-button  @click="cancel" variant="danger">Cancel</b-button>
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
        fournisseur: function () {
            return this.$store.getters.selected_fournisseur
        },


    }, 

    methods: {
        updateFournisseur() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateFournisseur',this.fournisseur)
            this.$router.push('/index_fournisseur')
        },
        cancel () {
            this.$router.push('/index_fournisseur')
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
