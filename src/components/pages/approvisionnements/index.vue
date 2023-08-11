<template>
<div>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup2"
                    label="Numero:"
                    label-for="exampleInput2">
        <b-form-input id="nom"
                      type="text"
                      v-model="approvisionnement.numero"
                      required
                      placeholder="Enter Numero">
        </b-form-input>
      </b-form-group>
      
      <b-button @click="searchApprovisionnement" variant="primary">Go</b-button>

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
                                        approvisionnement
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
                                <input type="text" class="form-control m-input" placeholder="Search..." id="generalSearch"  v-model="approvisionnementFilter" style="margin-left: 10px;">
                                <span class="m-input-icon__icon m-input-icon__icon--left">
                                    <span><i class="la la-search"></i></span>
                                </span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-xl-4 order-1 order-xl-2 m--align-right">
                            <router-link to="/add_approvisionnement" class="btn m-btn m-btn--gradient-from-primary m-btn--gradient-to-info">
                            <span>
                                <i class="la la-plus"></i>
                                <span>New Airline_Contract</span>
                            </span>
                            </router-link>
                            <div class="m-separator m-separator--dashed d-xl-none"></div>
                        </div>
                    </div>
                 </div>
                  <div class="m-section" v-if="search_approvisionnement">
                    <div class="m-section__content">
                        <b-table  :items="search_approvisionnement"
                                  :fields="fields"
                                  :per-page="perPage"
                                  :filter="approvisionnementFilter"
                                  responsive striped hover bordered outlined>
                            <template slot="button" slot-scope="data">
                                <b-btn  variant="success" @click="editApprovisionnement(data.item.id)">Edit</b-btn>
                            </template>
                            <template slot="button1" slot-scope="data">
                                <!--<b-btn  variant="success" onClick="window.open('/airlineContract/add')">view</b-btn>-->
                                <b-btn  variant="success" @click="deleteApprovisionnement(data.item.id)"  >Delete</b-btn>
                            </template>
                        </b-table>
                        <b-pagination  v-if="search_approvisionnement.length > perPage" :total-rows="search_approvisionnement.length" :per-page="perPage" v-model="currentPage"/>
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
            approvisionnement: {
               numero:'',
               
                
            },
          fields: {
            numero: {
              label: 'Nom',
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
          approvisionnementFilter: null,
          isSearchairlinecontract: false,
        }
    },
    mounted: function () {
      this.$store.dispatch('getAllApprovissionnements')
      //this.$store.dispatch('searchapprovisionnement')  
    },
   
    computed: {
      search_approvisionnement: function () {
        return this.$store.getters.approvisionnements_from_search
      }, 
      search_approvisionnement1: function () {
        return this.$store.getters.all_approvisionnements
      },  
      selected_approvisionnement: function () {
        return this.$store.getters.selected_approvisionnement
      }, 



    }, 

    methods: {
      searchApprovisionnement(){
          this.isSearchairlinecontract = true
            this.$store.dispatch('searchApprovisionnement', {
              numero: this.approvisionnement.numero
            });
        this.isSearchairlinecontract =  false
      },
      editApprovisionnement (id) {
          console.log('Edit approvisionnement button clicked')
          this.$store.dispatch('selectApprovisionnement', id)
          this.$router.push('/edit_approvisionnement')
      },
      deleteApprovisionnement (id) {
      console.log('Delete approvisionnement button clicked')
      this.$store.dispatch('selectApprovisionnement', id)
      this.$router.push('/delete_approvisionnement')
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
