<template>
  <div>
    <h2>Delete a client </h2>
    <div v-if="selected_client">
      <div>
        <label>Nom: </label> <label>{{selected_client.nom}}</label>
      </div>
      <div>
        <b-button @click="deleteClient(selected_client.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No Client to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteClient (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeClient', this.selected_client.id)
        this.$router.push('/index_client')
      }
    },
    computed: {
        selected_client: function () {
            return this.$store.getters.selected_client
        },

    }
  }
</script>
