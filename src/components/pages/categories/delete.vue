<template>
  <div>
    <h2>Delete a base contract</h2>
    <div v-if="selected_categorie">
      <div>
        <label>Nom: </label> <label>{{selected_categorie.nom}}</label>
      </div>
      <div>
        <b-button @click="deleteCategorie(selected_categorie.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No Categorie to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteCategorie (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeCategorie', this.selected_categorie.id)
        this.$router.push('/index_categorie')
      }
    },
    computed: {
        selected_categorie: function () {
            return this.$store.getters.selected_categorie
        },

    }
  }
</script>
