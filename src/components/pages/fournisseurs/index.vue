<template>
<div>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="fournisseur.nom"
                      required
                      placeholder="Enter nom">
        </b-form-input>
      </b-form-group>
      
      <b-button @click="searchFournisseur" variant="primary">Go</b-button>

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
                                        fournisseur
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
                                <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch"  v-model="fournisseurFilter" style="margin-left: 10px;">
                                <span class="m-input-icon__icon m-input-icon__icon--left">
                                    <span><i class="la la-search"></i></span>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 order-1 order-xl-2 m--align-right">
                            <router-link to="/add_fournisseur" class="btn m-btn m-btn--gradient-from-primary m-btn--gradient-to-info">
                            <span>
                                <i class="la la-plus"></i>
                                <span>New fournisseur</span>
                            </span>
                            </router-link>
                            <div class="m-separator m-separator--dashed d-xl-none"></div>
                        </div>
                    </div>
                 </div>
                  <div class="m-section" v-if="search_fournisseur">
                    <div class="m-section__content">
                        <b-table  :items="search_fournisseur"
                                  :fields="fields"
                                  :per-page="perPage"
                                  :filter="fournisseurFilter"
                                  responsive striped hover bordered outlined>
                            <template slot="button" slot-scope="data">
                                <b-btn  variant="success" @click="editFournisseur(data.item.id)">Edit</b-btn>
                            </template>
                            <template slot="button1" slot-scope="data">
                                <!--<b-btn  variant="success" onClick="window.open('/airlineContract/add')">view</b-btn>-->
                                <b-btn  variant="success" @click="deleteFournisseur(data.item.id)"  >Delete</b-btn>
                            </template>
                        </b-table>
                        <b-pagination  v-if="search_fournisseur.length > perPage" :total-rows="search_fournisseur.length" :per-page="perPage" v-model="currentPage"/>
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
            fournisseur: {
               nom:'',
               prenom:'',
               tel:'',
               adresse:'',
               email:'',
               updated_by:''
                
            },
          fields: {
            nom: {
              label: 'Nom',
              sortable: true
            },           
            prenom: {
              label: 'Prenom',
              sortable: true
            },           
            tel: {
              label: 'Tel',
              sortable: true
            },           
            adresse: {
              label: 'Adressse',
              sortable: true
            },           
            email: {
              label: 'Email',
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
          fournisseurFilter: null,
          isSearchairlinecontract: false,
        }
    },
    mounted: function () {
      //this.$store.dispatch('getAllCategorie')
      //this.$store.dispatch('searchCategorie')  
    },
   
    computed: {
      search_fournisseur: function () {
        return this.$store.getters.fournisseurs_from_search
      }, 
      getAllfournisseur: function () {
        return this.$store.getters.all_fournisseurs
      }, 

      selected_fournisseur: function () {
        return this.$store.getters.selected_fournisseur
      }, 



    }, 

    methods: {
      searchFournisseur(){
          this.isSearchairlinecontract = true
            this.$store.dispatch('searchFournisseur', {
              nom: this.fournisseur.nom
            });
        this.isSearchairlinecontract =  false
      },
      editFournisseur (id) {
          console.log('Edit categorie button clicked')
          this.$store.dispatch('selectFournisseur', id)
          this.$router.push('/edit_fournisseur')
      },
      deleteFournisseur (id) {
      console.log('Delete categorie button clicked')
      this.$store.dispatch('selectFournisseur', id)
      this.$router.push('/delete_fournisseur')
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
