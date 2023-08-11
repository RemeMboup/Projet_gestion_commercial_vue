<template>
    <div>
        <!--First Table-->
        <div class="row">
            <div class="col-lg-12">
                <div class="card filterable">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="ti-menu"></i> Basic Bootstrap Table
                        </h3>
                    </div>
                    <div class="card-body table-responsive">
                        <table class="table table-striped table-bordered" id="table2" data-toggle="table">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>User Name</th>
                                <th>
                                    User E-mail
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Connie</td>
                                <td>Reynolds</td>
                                <td>Connie.Reynolds69</td>
                                <td>Connie12@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kurt</td>
                                <td>Quitzon</td>
                                <td>Kurt.Quitzon19</td>
                                <td>Kurt.Quitzon@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Flossie</td>
                                <td>Cole</td>
                                <td>Flossie81</td>
                                <td>Flossie_Cole@gmail.com</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Rahsaan</td>
                                <td>Littel</td>
                                <td>Rahsaan8</td>
                                <td>Rahsaan_Littel@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Zula</td>
                                <td>Simonis</td>
                                <td>Zula.Simonis</td>
                                <td>Zula_Simonis74@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Mackenzie</td>
                                <td>O'Hara</td>
                                <td>Mackenzie85</td>
                                <td>Mackenzie.OHara31@hotmail.com</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Marty</td>
                                <td>Yundt</td>
                                <td>Marty_Yundt</td>
                                <td>Marty.Yundt17@gmail.com</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Harmon</td>
                                <td>Herzog</td>
                                <td>Harmon93</td>
                                <td>Harmon_Herzog@gmail.com</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Kameron</td>
                                <td>Morissette</td>
                                <td>Kameron_Morissette79</td>
                                <td>Kameron88@yahoo.com</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Miguel</td>
                                <td>Nikolaus</td>
                                <td>Miguel_Nikolaus</td>
                                <td>Miguel.Nikolaus@gmail.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- First Table End -->
        <!-- second table start -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            <div class="ti-menu"> Vue Handsontable</div>
                        </h3>
                    </div>
                    <div class="card-body">
                        <div id="hot-preview">
                            <HotTable :root="root" :settings="hotSettings"></HotTable>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- second table end -->
        <!--third table start-->
        <div class="row">
            <div class="col-lg-12">
                <div class="card filterable">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="ti-layout-grid3"></i> Editable Table
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered" id="table1">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>User Name</th>
                                    <th>
                                        User E-mail
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Shayna</td>
                                    <td>Lang</td>
                                    <td>Shayna74</td>
                                    <td>Shayna.Lang@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Cleo</td>
                                    <td>Abbott</td>
                                    <td>Cleo_Abbott94</td>
                                    <td>Cleo99@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Theodora</td>
                                    <td>Kihn</td>
                                    <td>Theodora_Kihn</td>
                                    <td>Theodora2@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Madison</td>
                                    <td>Miller</td>
                                    <td>Madison_Miller94</td>
                                    <td>Madison5@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Juwan</td>
                                    <td>Smitham</td>
                                    <td>Juwan90</td>
                                    <td>Juwan13@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Jarrod</td>
                                    <td>Bradtke</td>
                                    <td>Jarrod.Bradtke23</td>
                                    <td>Jarrod.Bradtke40@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Moses</td>
                                    <td>Stark</td>
                                    <td>Moses.Stark</td>
                                    <td>Moses.Stark85@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Garrett</td>
                                    <td>Pacocha</td>
                                    <td>Garrett.Pacocha94</td>
                                    <td>Garrett.Pacocha@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Ellen</td>
                                    <td>Treutel</td>
                                    <td>Ellen63</td>
                                    <td>Ellen5@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Janis</td>
                                    <td>Kautzer</td>
                                    <td>Janis53</td>
                                    <td>Janis32@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Christian</td>
                                    <td>Jaskolski</td>
                                    <td>Christian87</td>
                                    <td>Christian87@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Elton</td>
                                    <td>MacGyver</td>
                                    <td>Elton5</td>
                                    <td>Elton_MacGyver@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Jamaal</td>
                                    <td>Morar</td>
                                    <td>Jamaal66</td>
                                    <td>Jamaal0@yahoo.com</td>
                                </tr>
                                <tr>
                                    <td>14</td>
                                    <td>Eddie</td>
                                    <td>Blick</td>
                                    <td>Eddie_Blick</td>
                                    <td>Eddie.Blick@hotmail.com</td>
                                </tr>
                                <tr>
                                    <td>15</td>
                                    <td>Kallie</td>
                                    <td>Murphy</td>
                                    <td>Kallie_Murphy38</td>
                                    <td>Kallie.Murphy@yahoo.com</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--third table end-->
    </div>
</template>
<script>
import HotTable from 'vue-handsontable-official';
import editable from "../../vendors/editable/mindmup-editabletable.js";
// ================

export default {
    name: "bootstrap_tables",
    data: function() {
        return {
            showDate: new Date(),
            root: 'test-hot',
            hotSettings: {
                data: [['1','Shayna', 'Lang','Shayna74','Shayna.Lang@yahoo.com'],
                    ['2','Cleo', 'Abbott','Cleo_Abbott94','Cleo99@yahoo.com'],
                    ['3','Theodora', 'Kihn','Theodora_Kihn','Theodora2@gmail.com'],
                    ['4','Madison', 'Miller','Madison_Miller94','Madison5@gmail.com'],
                    ['5','Juwan', 'Smitham','Juwan90','Juwan13@yahoo.com'],
                    ['6','Jarrod', 'Bradtke','Jarrod.Bradtke23','Jarrod.Bradtke40@yahoo.com'],
                    ['7','Moses', 'Stark','Moses.Stark','Moses.Stark85@gmail.com'],
                    ['8','Garrett', 'Pacocha','Garrett.Pacocha94','Garrett.Pacocha@hotmail.com'],
                    ['9','Ellen', 'Treutel','Ellen63','Ellen5@gmail.com'],
                    ['10','Janis', 'Kautzer','Janis53','Janis32@gmail.com'],
                    ['11','Christian', 'Jaskolski','Christian87','Christian87@gmail.com'],
                    ['12','Elton', 'MacGyver','Elton5','Elton_MacGyver@hotmail.com'],
                    ['13','Jamaal', 'Morar','Jamaal66','Jamaal0@yahoo.com'],
                    ['14','Eddie', 'Blick','Eddie_Blick','Eddie.Blick@hotmail.com'],
                    ['15','Kallie', 'Murphy','Kallie_Murphy38','Kallie.Murphy@yahoo.com'],
                ],
                colHeaders: ['#','First Name','Last Name','User Name','User Email'],
                columnSorting: true,
                colWidths: [45, 100, 100, 60, 80, 80, 80],
            }
        };
    },
    components: {
        HotTable
    },
    mounted: function() {
        "use strict";
        $(document).ready(function() {
            $('#table1').editableTableWidget();
            $(".table-responsive input").attr("maxlength", '30');
        });
    },
    methods: {

    },
    destroyed: function() {

    }
}
</script>
<style src="../../assets/css/custom_css/bootstrap_tables.css"></style>
<style>
    .wtHider,.htCore,.handsontable table.htCore,.ht_clone_top.handsontable,.handsontable .wtSpreader,.handsontable .wtHider{
        min-width:100% !important;
    }@media(min-width:320px) and (max-width:425px){
        #hot-preview{
            overflow-x: scroll;
        }
    }
    .wtHider{
        height: auto;
    }
</style>
