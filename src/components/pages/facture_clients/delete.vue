<template>
  <div>
    <h2>Delete a base contract</h2>
    <div v-if="selected_commande">
      <div>
        <label>Nom: </label> <label>{{selected_commande.numero}}</label>
      </div>
      <div>
        <b-button @click="deletecommande(selected_commande.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No commande to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deletecommande (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeCommande', this.selected_commande.id)
        this.$router.push('/index_commande')
      }
    },
    computed: {
        selected_commande: function () {
            return this.$store.getters.selected_commande
        },

    }
  }
</script>
