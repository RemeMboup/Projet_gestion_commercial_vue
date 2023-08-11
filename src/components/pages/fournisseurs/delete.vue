<template>
  <div>
    <h2>Delete a fournisseur </h2>
    <div v-if="selected_fournisseur">
      <div>
        <label>Nom: </label> <label>{{selected_fournisseur.nom}}</label>
      </div>
      <div>
        <b-button @click="deleteFournisseur(selected_fournisseur.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No fournisseur to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteFournisseur (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeFournisseur', this.selected_fournisseur.id)
        this.$router.push('/index_fournisseur')
      }
    },
    computed: {
        selected_fournisseur: function () {
            return this.$store.getters.selected_fournisseur
        },

    }
  }
</script>
