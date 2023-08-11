<template>
  <div>
      <p><h1>Get Customer</h1>
      {{customer.id}}
      <form class="form">
           <div class="form-group">
                <label for="name">ID</label>
                <input type="text" class="form-control" v-model="customer.id">
            </div>
            <router-link to="edit_customer">
                <v-btn
                   @click="getCustomer(customer.id)"
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
      this.$store.dispatch('getAffliates')
    },

   mounted: function () {
       console.log(this.$store.state.token)
    },
   computed: {
       
      /* This follows methods retrieve data from store which become availables in this views */
    customer () {
        return this.$store.state.customer
    }
  },

  /* these methods call the respectives actions from the store */
  methods: {
   
    getCustomer (id) {
       this.$store.dispatch('getCustomer')
    }
  }
}
</script>