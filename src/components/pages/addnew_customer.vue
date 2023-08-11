<template>
<div>
    <div class="row">
        <div class="col-lg-12">
            <b-card no-body>
                <b-tabs ref="tabs" card >
                    <b-tab title="Form Action" active>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="card ">
                                    <div class="card-header">
                                        <h3 class="card-title">
                                            <i class="fa fa-fw ti-pencil"></i>Customer
                                        </h3>
                                        <span class="float-right hidden-xs txt_font">
                                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                                    <i class="fa fa-fw ti-close removecard"></i>
                                        </span>
                                    </div>
                                    <div class="card-body">
                                        <form action="#" class="form-horizontal">
                                           
                                            <div class="form-body">
                                                <div class="form-group m-t-10 row">
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="agency_id"
                                                               class="form-control-label">
                                                            AgencyId
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Angency_Id"
                                                                   id="agency_id" v-model="customer.agency_id">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="agency_id"
                                                               class="form-control-label">
                                                            InterfaceId
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Interface_Id"
                                                                   id="interface_id" v-model="customer.interface_id">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="name"
                                                               class="form-control-label">
                                                            Name
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Name"
                                                                   id="name" v-model="customer.name">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="country"
                                                               class="form-control-label">
                                                            Country
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Country"
                                                                   id="country" v-model="customer.country">
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="city"
                                                               class="form-control-label">
                                                            City
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                            
                                                            <input type="text" class="form-control"
                                                                   placeholder="City"
                                                                   id="city" v-model="customer.city">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="city"
                                                               class="form-control-label">
                                                            Address1
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                            
                                                            <input type="text" class="form-control"
                                                                   placeholder="address1"
                                                                   id="address1" v-model="customer.address1">
                                                        </div>
                                                    </div>
                                                    <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="address2"
                                                               class="form-control-label">
                                                            Address2
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                            
                                                            <input type="text" class="form-control"
                                                                   placeholder="Address2"
                                                                   id="address2" v-model="customer.address2">
                                                        </div>
                                                    </div>
                                                     <div class="col-sm-3 col-lg-4 float-md-right txt_media">
                                                        <label for="zip_code"
                                                               class="form-control-label">
                                                            Zip_Code
                                                        </label></div>
                                                    <div class="col-sm-9 col-lg-8">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                   placeholder="Zip_Code"
                                                                   id="zip_code" v-model="customer.zip_code">
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <div class="form-group">
                                                        <label for="select21" class="control-label">
                                                            Customer Type
                                                        </label>
                                                        <select id="customer_type"  style="width:100%" v-model="customer.customer_type">
                                                                <option v-for="option in c_type" v-bind:key="option.customer" v-bind:value="option.value">
                                                                     {{option.customer}}
                                                                </option>
                                                                
                                                        </select>
                                                    </div>
                                                    </div>
                                                    </br>
                                                    <div>
                                                    <div class="form-group">
                                                        <label for="select21" class="control-label">
                                                            Affiliates
                                                        </label>
                                                        <select name="AffliateId" id="" v-model="customer.group">
                                                            <option v-for="option in affliates" v-bind:key="option.id" v-bind:value="option.id">
                                                                {{option.name}}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                    </br>
                                                    <div class="form-group">
                                                        <label for="select21" class="control-label">
                                                            State
                                                        </label>
                                                        <select name="state" id="" v-model="customer.state">
                                                            <option v-for="option in states" v-bind:key="option.state" v-bind:value="option.value">
                                                                {{option.state}}
                                                            </option>
                                                        </select>
                                                    </div></b>
                                                     <div>
                                                <div class="row">
                                                    <div class="col-sm-offset-3 col-sm-9 ml-auto">
                                                        <button type="button" class="btn  mb-3 btn-primary" @click="addCustomer">Submit
                                                        </button>
                                
                                                    </div>
                                                </div>
                                            </div>
                                                    
                                                </div>
                                            </div>
                                        </form>
                                    </div>      
                                </div>
                            </div>
                            
                        </div>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</div>
</template>

<script>
 import Multiselect from 'vue-multiselect';
    Vue.component(Multiselect);
    import Vue from 'vue'
    import vue2Dropzone from 'vue2-dropzone'
    import VueFormWizard from 'vue-form-wizard'
    import Datepicker from 'vuejs-datepicker'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    
export default {
    
name: "addnew_customer",
    /* returns  all affliates when the component is 
    ** mounted by calling the getAffliates action from the store
    */
    components: {
        Multiselect,
        Datepicker,
        vueDropzone: vue2Dropzone
    },
    mounted: function () {
       console.log(this.$store.state.token)
    },
  computed: {

      /* This follows methods retrieve data from store which become availables in this views */
    customer () {
        return this.$store.state.customer
    },
    states () {
        return this.$store.state.statess
    },
    c_type () {
        return this.$store.state.c_type
    },
    affliates () {
        return this.$store.state.affliates
    },
    affliateId () {
        return this.$store.state.affliateId
    }
  },

  /* these methods call the respectives actions from the store */
  methods: {
    addCustomer () {
       this.$store.dispatch('addCustomer')
    },
    getCustomer () {
       this.$store.dispatch('getCustomer')
    },
    removeCustomer () {
       this.$store.dispatch('removeCustomer')
    },
    updateCustomer () {
       this.$store.dispatch('updateCustomer')
    },
    onComplete: function(){
        alert('Yay. Done!');
    },
    toggle_left() {
            this.$store.commit('left_menu', "toggle");
    }
  }
}
</script>
<style src="../../vendors/jasny-bootstrap/dist/css/jasny-bootstrap.min.css"></style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="../../assets/css/custom_css/vuewizard.css"></style>
<style>
    .vdp-datepicker input,.multiselect__tags{
        display: block;
        width: 100%;
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #495057;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid #ced4da;
        border-radius: 0.25rem;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15
    }
    .multiselect .multiselect__tags{
        padding: 5px 0 0 0;
        min-height:30px;
        height: 33px;
    }
    @media(max-width:320px){
        #dropzone{
            padding: 10px;
        }
        .dz-preview{
            margin: 0 !important;
        }
    }
</style>
