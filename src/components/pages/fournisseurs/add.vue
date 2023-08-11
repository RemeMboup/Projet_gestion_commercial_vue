<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
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
                      v-model="fournisseur.updated_by"
                      required
                      placeholder="updated_by">
        </b-form-input>
      </b-form-group>
      <b-button @click="add" variant="primary">Submit</b-button>
      <b-button  @click="cancel"  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        fournisseur: {
               nom:'',
               prenom:'',
               tel:'',
               adresse:'',
               email:'',
               updated_by:''
                
            },
      
      }
    },
    mounted() {

    },
    methods: {
      
      add() {
        console.log('Add affiliate button clicked')
          this.$store.dispatch('addFournisseur', { 
              nom: this.fournisseur.nom ,
              prenom: this.fournisseur.prenom ,
              tel: this.fournisseur.tel ,
              adresse: this.fournisseur.adresse ,
              email: this.fournisseur.email ,
              updated_by: this.fournisseur.updated_by ,
                           
          })

          this.$router.push('/index_fournisseur')
      },
      cancel () {
        this.fournisseur.nom = '';
        this.fournisseur.prenom = '';
        this.fournisseur.adresse = '';
        this.fournisseur.email = '';
        this.fournisseur.tel = '';
        this.fournisseur.updated_by = '';
        this.fournisseur.created_by = ''
    }
    },
    computed: {

    }
  }
</script>

