<template>
<div>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="numero"
                      type="text"
                      v-model="detail_commande.numero"
                      required
                      placeholder="Enter numero">
        </b-form-input>
      </b-form-group>
      
      <b-button @click="searchDetail_commande" variant="primary">Go</b-button>

    </b-form>
  </div>
  <div class="row">
            <div class="col-xl-12">
                    <!--begin::Portlet-->
                    <div class="m-portlet">
                        <div class="m-portlet__head">
                            <div class="m-portlet__head-caption">
                                <div class="m-portlet__head-title">
                                    <h3 class="m-portlet__head-text">
                                        detail_commande
                                    </h3>
                                </div>
                            </div>
                        </div>
                <div class="m-portlet__body">
                <div class="m-form m-form--label-align-right m--margin-top-20 m--margin-bottom-30">
                        <div class="row align-items-left">
                        <div class="col-xl-8 order-2 order-xl-1">
                            <div class="form-group m-form__group row align-items-left">
                            <div class="col-md-4">
                                <div class="m-input-icon m-input-icon--left">
                                <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch"  v-model="detail_commandeFilter" style="margin-left: 10px;">
                                <span class="m-input-icon__icon m-input-icon__icon--left">
                                    <span><i class="la la-search"></i></span>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 order-1 order-xl-2 m--align-right">
                            <router-link to="/add_detail_commande" class="btn m-btn m-btn--gradient-from-primary m-btn--gradient-to-info">
                            <span>
                                <i class="la la-plus"></i>
                                <span>New Airline_Contract</span>
                            </span>
                            </router-link>
                            <div class="m-separator m-separator--dashed d-xl-none"></div>
                        </div>
                    </div>
                 </div>
                  <div class="m-section" v-if="search_detail_commande">
                    <div class="m-section__content">
                        <b-table  :items="search_detail_commande"
                                  :fields="fields"
                                  :per-page="perPage"
                                  :filter="detail_commandeFilter"
                                  responsive striped hover bordered outlined>
                            <template slot="button" slot-scope="data">
                                <b-btn  variant="success" @click="editDetail_commande(data.item.id)">Edit</b-btn>
                            </template>
                            <template slot="button1" slot-scope="data">
                                <!--<b-btn  variant="success" onClick="window.open('/airlineContract/add')">view</b-btn>-->
                                <b-btn  variant="success" @click="deleteDetail_commande(data.item.id)"  >Delete</b-btn>
                            </template>
                        </b-table>
                        <b-pagination  v-if="search_detail_commande.length > perPage" :total-rows="search_detail_commande.length" :per-page="perPage" v-model="currentPage"/>
                  </div>
            </div>
             <div v-else class="m-loader m-loader--primary m-loader--right" style="width: 30px; display: inline-block;"></div>
              </div>
              </div>
            </div>
          </div>
          </div>
</template>
<script>


  export default {
    data () {
        return {
            detail_commande: {
               numero:'',
              
                
            },
          fields: {
            numero: {
              label: 'Numero',
              sortable: true
            },           
            quantite: {
              label: 'Quantite',
              sortable: true
            },           
            prix_htva: {
              label: 'Prix_Htva',
              sortable: true
            },           
            commande: {
              label: 'Commande',
              sortable: true
            },           
            numero: {
              label: 'Produit',
              sortable: true
            },           
            created_by: {
              label: 'CREATED_BY',
              sortable: true
            },
            updated_by: {
              label: 'UPDATED_BY',
              sortable: true
            },
             updated: {
              label: 'UPDATED',
              sortable: false
            },
             created_at: {
              label: 'CREATE_ ',
              sortable: false
            },
            button: {
              label: 'ACTIONS',
              sortable: false
            },
            button1: {
              label: 'VIEWS',
              sortable: false
            },
          },
          currentPage: 1,
          perPage: 5,
          detail_commandeFilter: null,
          isSearchairlinecontract: false,
        }
    },
    mounted: function () {
      //this.$store.dispatch('getAllDetail_commande')
      //this.$store.dispatch('searchdetail_commande')  
    },
   
    computed: {
      search_detail_commande: function () {
        return this.$store.getters.detail_commandes_from_search
      }, 
      getAlldetail_commande: function () {
        return this.$store.getters.all_detail_commandes
      }, 

      selected_detail_commande: function () {
        return this.$store.getters.selected_detail_commande
      }, 



    }, 

    methods: {
      searchDetail_commande(){
          this.isSearchairlinecontract = true
            this.$store.dispatch('searchDetail_commande', {
              numero: this.detail_commande.numero
            });
        this.isSearchairlinecontract =  false
      },
      editDetail_commande (id) {
          console.log('Edit detail_commande button clicked')
          this.$store.dispatch('selectDetail_commande', id)
          this.$router.push('/edit_detailcommande')
      },
      deleteDetail_commande (id) {
      console.log('Delete detail_commande button clicked')
      this.$store.dispatch('selectDetail_commande', id)
      this.$router.push('/delete_detailcommande')
      }, 
        
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
