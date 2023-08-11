<template>
  <div>
      <p><h1>Get Contract</h1>
      {{contract.id}}
      <form class="form">
           <div class="form-group">
                <label for="name">ID</label>
                <input type="text" class="form-control" v-model="contract.id">
            </div>
            <router-link to="edit_contract">
                <v-btn
                   @click="getContract(contract.id)"
                   color="green"
                   outline>GET
                </v-btn>
            </router-link>
      </form>
  </div>
</template>
<script>
import axios from 'axios'
export default {
     mounted: function () {
       console.log(this.$store.state.token)
    },
    computed: {
        /* This follows methods retrieve data from store which become availables in this views */
        
        contract () {
            return this.$store.state.contract
        }
    },

    methods: {

        /* these methods call the respectives actions from the store */
        getContract (id) {
              this.$store.dispatch('getContract')
       }
        
    }    
}
</script>
