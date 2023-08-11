<template>
  <div>
    <h2>Delete a produit</h2>
    <div v-if="selected_produit">
      <div>
        <label>Nom: </label> <label>{{selected_produit.nom}}</label>
      </div>
      <div>
        <b-button @click="deleteProduit(selected_produit.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No Produit to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteProduit (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeProduit', this.selected_produit.id)
        this.$router.push('/index_produit')
      }
    },
    computed: {
        selected_produit: function () {
            return this.$store.getters.selected_produit
        },

    }
  }
</script>
