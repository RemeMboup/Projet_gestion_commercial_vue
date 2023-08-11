<template>
  <div>
    <h2>Delete Detail Commande</h2>
    <div v-if="selected_detail_commande">
      <div>
        <label>Numero: </label> <label>{{selected_detail_commande.numero}}</label>
      </div>
      <div>
        <b-button @click="deleteDetail_commande(selected_detail_commande.id)" variant="danger">Delete</b-button>
      </div>
    </div>
    <p v-else>No detail_commande to delete</p>
  </div>
</template>
<script>
  export default {
    methods: {
      deleteDetail_commande (id) {
        console.log('Delete base contract button clicked')
        this.$store.dispatch('removeDetail_commande', this.selected_detail_commande.id)
        this.$router.push('/index_detailcommande')
      }
    },
    computed: {
        selected_detail_commande: function () {
            return this.$store.getters.selected_detail_commande
        },

    }
  }
</script>
