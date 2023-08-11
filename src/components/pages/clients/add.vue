<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="client.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prenom:"
                    label-for="exampleInput2">
        <b-form-input id="prenom"
                      type="text"
                      v-model="client.prenom"
                      required
                      placeholder="Enter prenom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Address:"
                    label-for="exampleInput2">
        <b-form-input id="adresse"
                      type="text"
                      v-model="client.adresse"
                      required
                      placeholder="Enter address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Tel:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="client.tel"
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
                      v-model="client.email"
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
                      v-model="client.updated_by"
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
        client: {
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
          this.$store.dispatch('addClient', { 
              nom: this.client.nom ,
              prenom: this.client.prenom ,
              tel: this.client.tel ,
              adresse: this.client.adresse ,
              email: this.client.email ,
              updated_by: this.client.updated_by ,
                           
          })
          
          this.$router.push('/index_client')
      },
      cancel () {
        this.client.nom = '';
        this.client.prenom = '';
        this.client.adresse = '';
        this.client.email = '';
        this.client.tel = '';
        this.client.updated_by = '';
        this.client.created_by = ''
    }
    },
    computed: {

    }
  }
</script>

