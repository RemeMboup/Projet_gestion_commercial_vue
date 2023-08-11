<template>
  <div>
    <h2>Delete a base contract</h2>
    <div v-if="selected_approvisionnement">
      <div>
        <label>Nom: </label> <label>{{selected_approvisionnement.numero}}</label>
      </div>
      <div>
        <b-button @click="deleteApprovisionnement(selected_approvisionnement.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No approvisionnement to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteApprovisionnement (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeApprovisionnement', this.selected_approvisionnement.id)
        this.$router.push('/index_approvisionnement')
      }
    },
    computed: {
        selected_approvisionnement: function () {
            return this.$store.getters.selected_approvisionnement
        },

    }
  }
</script>
