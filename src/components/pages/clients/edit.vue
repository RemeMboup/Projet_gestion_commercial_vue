<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="selected_client.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Prenom:"
                    label-for="exampleInput2">
        <b-form-input id="prenom"
                      type="text"
                      v-model="selected_client.prenom"
                      required
                      placeholder="Enter prenom">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Address:"
                    label-for="exampleInput2">
        <b-form-input id="adresse"
                      type="text"
                      v-model="selected_client.adresse"
                      required
                      placeholder="Enter address">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Tel:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="selected_client.tel"
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
                      v-model="selected_client.email"
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
                      v-model="selected_client.created_by"
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
                      v-model="selected_client.updated_by"
                      required
                      placeholder="Created_by">
        </b-form-input>
      </b-form-group>
      <b-button @click="updateClient" variant="primary">Submit</b-button>
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
        selected_client: function () {
            return this.$store.getters.selected_client
        },


    }, 

    methods: {
        updateClient() {
            console.log('Edit base contract button clicked')
            this.$store.dispatch('updateClient',this.selected_client)
            this.$router.push('/index_client')
        },
        cancel () {
            this.$router.push('/index_client')
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
