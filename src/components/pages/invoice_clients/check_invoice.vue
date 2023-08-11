
<template>

<body>
    <div id="div1">
        
        <b-card>
            <b-input-group>
                <b-form-input v-model="numero" placeholder="NUMERO"></b-form-input>
                <b-input-group-append>
                    <b-btn @click="check_detail" variant="info">Display</b-btn>
                </b-input-group-append>
            </b-input-group>
        </b-card>
        <br>
    </div>
    <!--<b>Div 2:</b> <a href="javascript:printDiv('invoice-stmt')">Print</a><br>-->
    <div  class="content p-l-r-15" id="invoice-stmt" v-if="this.detailCommande">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="fa fa-fw ti-credit-card"></i> Invoice
                </h3>
                <span class="float-right">
                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                    <i class="fa fa-fw ti-close removecard"></i>
                                </span>
            </div>
            <div class="card-body">
                <div class="row">

                    <div class="col-md-6 col-sm-12 col-12 col-lg-6 col-xl-6 invoice_bg">
                        <h4><img src="" alt="Global"/></h4>
                        <h4><strong>Global GBS Services SARL:</strong></h4>
                        <address>
                            <br/><strong>Adresse: </strong> Point E Rue Kaolack
                            <br/><strong>Fax: </strong> 33 845 12 14
                            <br/> <strong>Telephone: </strong> 33 845 12 13
                            <br/> <strong>Email: </strong> global@gbs.sn
                        </address>
                    </div>
                    <div class="col-md-6 col-sm-12 col-12 col-lg-6 col-xl-6 invoice_bg text-right">
                        <div class="float-right">
                            
                            <h4><strong>Client Info:</strong></h4>
                            <address>
                                <br/> <strong>Prenom: </strong>{{this.client.prenom}}
                                <br/> <strong>Nom: </strong> {{this.client.nom}}
                                <br/> <strong>Email:</strong>{{this.client.email}}
                                <br/> <strong>Telephone:</strong>{{this.client.tel}}
                            </address>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="table-responsive">
                        <table class="table table-striped table-condensed" id="customtable">
                            <thead>
                            <tr class="bg-primary">
                                <th>
                                    <strong>Produit</strong>
                                </th>
                                <th>
                                    <strong>Prix_Htva</strong>
                                </th>
                                <th class="text-center">
                                    <strong>
                                        Quantity
                                    </strong>
                                </th>
                                <th></th>
                                <th class="text-right">
                                    <strong>Total</strong>
                                </th>
                                <th><i></i></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(detailCommande, index) in  this.detailCommande">
                                <td class="emptyrow" contenteditable >{{ detailCommande.nom_produit }}</td>
                                <td class="emptyrow" contenteditable>{{detailCommande.prix_htva}}</td>
                                <td class="emptyrow text-center" contenteditable>{{detailCommande.quantite}}</td>
                                <td class="emptyrow text-right" contenteditable>
                                </td>
                                <td class="emptyrow text-right" contenteditable>{{detailCommande.montant}}
                                </td>
                                <td><i></i></td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td class="highrow"></td>
                                <td class="highrow"></td>
                                <td class="highrow text-center"></td>
                                <td class="highrow text-right">
                                    <strong>
                                        Montant Total: &nbsp;
                                    </strong>
                                </td>
                                <td class="highrow text-right">
                                    <strong contenteditable>{{this.montant_total}}</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="emptyrow"></td>
                                <td class="emptyrow"></td>
                                <td class="emptyrow text-center"></td>
                                <td class="emptyrow text-right">
                                    <strong>
                                        TVA: &nbsp;
                                    </strong>
                                </td>
                                <td class="highrow text-right">
                                    <strong contenteditable>{{(this.montant_total*18)/100}}</strong>
                                </td>
                                <td></td>
                            </tr>
                            <tr>
                                <td class="emptyrow">
                                    <i class="livicon" data-name="barcode" data-size="60" data-loop="true"></i>
                                </td>
                                <td class="emptyrow"></td>
                                <td class="emptyrow text-center"></td>
                                <td class="emptyrow text-right">
                                    <strong>
                                        Total: &nbsp;
                                    </strong>
                                </td>
                                <td class="highrow text-right">
                                    <strong contenteditable>{{(this.montant_total )+(this.montant_total*18)/100}}</strong>
                                </td>
                                <td></td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div class="col-md-12">
                    <h4><Strong>Terms and conditions:</Strong></h4>
                    <ul class="terms_conditions">
                        <li>An invoice must accompany products returned for warantty</li>
                        <li>Balance due within 10 days of invoice date,1.5% interest/month thereafter.</li>
                        <li>All goods returned for replacement/credit must be saleable condition with original
                            packaging.
                        </li>
                    </ul>
                </div>
                <div class="btn-section">
                    <div class="col-md-12 col-sm-12 col-12">
                                <span class="float-right">
                                            <button type="button"
                                                    class="btn btn-responsive button-alignment btn-success mb-3"
                                                    data-toggle="button" @click="addFacture_client">
                                                <i></i> AddFacture
                                            </button>
                                             <button type="button"
                                                     class="btn btn-responsive button-alignment btn-primary mb-3"
                                                     data-toggle="button">
                                                <span style="color:#fff;" onclick="javascript:window.print();">
                                                    <i class="fa fa-fw ti-printer"></i>
                                                Print
                                            </span>
                                </button>
                                </span>
                    </div>
                </div>
            </div>
            </div>
        <div class="background-overlay"></div>
    </div>
</body>   
</template>
<script>
import axios from 'axios'
export default {
    components: {
        //riseLoader,
        //PnrItinaries,
        //PnrPassengers,
        //PnrDetails
    },
    data() {
        return {
            name: 'Check Invoive',
            numero: null,

            detailData: null,

            detailCommande: null,
            client: null,
            montant_total: null,
            numero_facture: null,

            loading: false,

            spinnerOptions : {
                color: '#3AB982',
                height: '35px',
                width: '4px',
                margin: '2px',
                radius: '2px'
            },
             fields: {
                nom_produit: {
                label: 'Nom_Produit',
                
                },           
                quantite: {
                label: 'Quantite',
                
                },           
                prix_htva: {
                label: 'Prix_Htva',
                
                },           
                montant: {
                label: 'montant',
               
                }
                         
            },
            list_id : []
        }
    },

    methods: {
        addFacture_client() {
        console.log('Add affiliate button clicked')
        
          this.$store.dispatch('addFacture_client', { 
              numero: "00000"+this.numero_facture,
              commande: this.detailCommande_id,
              created_by: "marememboup93@gmail.com",
              montant: this.montant_total,
                           
          })
          this.$router.push('/index_facture_client')
        },
        check_detail() {

            if(this.numero) {
                console.log('Numero Invalide');
                
                this.loading = true;
                this.client = null;
                this.detailCommande = null;
                this.montant_total = null;
                this.numero_facture = null
                axios({
                    url: 'http://localhost:8000/get-detail-commande/',
                    method: 'post',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    data: {
                        "numero": this.numero
                    }
                }).then(response => {
                    console.log(response.data);

                    this.loading = false;

                    this.detailData = response.data;

                    this.client= response.data['client']
                    console.log( this.client);
                    this.detailCommande = response.data['Detail_Commande'];
                    this.detailCommande_id = response.data['Commande_id'];
                    console.log(this.detailCommande);
                    console.log( this.detailCommande_id);
                    this.montant_total = response.data['Montant_Total'];
                    console.log(this.montant_total);
                    this.numero_facture = response.data['Numero_Facture']
                    console.log(this.numero_facture);


                }).catch(error => {
                    console.log(error);

                    this.loading = false;
                })

            } else {
                console.log('Invalid Numero');
            }
            
        }
    }
}

</script>
