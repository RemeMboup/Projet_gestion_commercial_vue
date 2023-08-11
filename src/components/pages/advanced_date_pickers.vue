<template>
    <div>
        <!--main content-->
        <div class="row">
            <div class="col-md-6">
                <div class="card ">
                    <div class="card-header">
                        <h3 class="card-title">
                            <i class="ti-calendar"></i>  Date Picker
                        </h3>
                        <span class="float-right">
                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                    <i class="fa fa-fw ti-close removecard "></i>
                                </span>
                    </div>
                    <div class="card-body">
                        <div class="box-body">
                            <!-- Date range -->
                            <div class="form-group">
                                <label >
                                    Date Picker:
                                </label>
                                <div class="input-group ">
                                    <div class="input-group-addon">
                                        <i class="fa fa-fw ti-calendar"></i>
                                    </div>
                                    <flat-pickr v-model="date" class="form-control"></flat-pickr>
                                </div>
                                <!-- /.input group -->
                            </div>
                            <!-- /.form group -->
                            <!-- Date and time range -->
                            <div class="form-group">
                                <label >
                                    Multiple Date Picker:
                                </label>
                                <div class="input-group clockpicker" data-placement="left" data-align="top"
                                     data-autoclose="true">
                                    <flat-pickr v-model="multiple" :config="configmultiple" class="form-control"></flat-pickr>
                                    <span class="input-group-addon">
                                            <i class="fa fa-fw ti-calendar"></i>
                                            </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>
                                    Year and Month selection:
                                </label>
                                <div class="input-group clockpicker-with-callbacks">
                                    <datepicker :minimumView="'month'" :maximumView="'year'" :initialView="'year'" class="form-control date_picker" :readonly="false"></datepicker>
                                    <span class="input-group-addon">
                                            <i class="fa fa-fw ti-calendar"></i>
                                            </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>
                                    Minimum and Maximum Dates:
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-fw ti-time"></i>
                                    </div>
                                    <flat-pickr v-model="datetwo" :config="configtwo" class="form-control" :readonly=false></flat-pickr>
                                </div>
                                <!-- /.input group -->
                            </div>
                            <!-- /.form group -->
                            <!-- Date and time range -->
                            <div class="form-group">
                                <label>
                                    Date and Time Picker:
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-fw ti-calendar"></i>
                                    </div>
                                    <flat-pickr v-model="date" :config="config" class="form-control" :readonly=false></flat-pickr>
                                </div>
                            </div>
                            <!-- /.form group -->
                            <!-- time picker -->
                            <!-- range of dates -->
                            <div class="form-group">
                                <label>
                                    Range of Dates:
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-fw ti-calendar"></i>
                                    </div>
                                    <flat-pickr v-model="date" :config="range" class="form-control" :readonly=false></flat-pickr>
                                </div>
                            </div>
                            <!-- /.form group -->
                            <!-- Disable days of week -->
                            <div class="form-group">
                                <label>
                                    Disable Days of Week:
                                </label>
                                <div class="input-group">
                                    <div class="input-group-addon">
                                        <i class="fa fa-fw ti-calendar"></i>
                                    </div>
                                    <flat-pickr v-model="date" :config="disable" class="form-control" :readonly=false></flat-pickr>
                                </div>
                            </div>
                            <!-- /.end Disable days of week -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--main content ends-->
    </div>
</template>
<script>
import Vue from 'vue';
import Datepicker from 'vuejs-datepicker';;
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
    name: "advanced_date_pickers",
    data(){
        return{
            date: new Date(),
            datetwo: new Date(),
            multiple: new Date(),
            config: {
                enableTime: true,
                dateFormat: 'd-m-y h:i',
            },
            configtwo:{
                minDate: "today",
                maxDate: new Date().fp_incr(14)
            },
            configmultiple:{
                mode: "multiple",
                dateFormat: "Y-m-d",
            },
            range:{
                mode: "range"
            },
            disable:{
                disable: ["2018-01-30", "2018-01-21", "2018-01-08", new Date(2018,1,1) ],
                dateFormat: "Y-m-d",
            },
        }
    },
    components:{
        Datepicker,
        flatPickr
    },
    mounted: function() {
        "use strict";
    },
    destroyed: function() {

    }
}
</script>
<style>
    html{
        background-color: #fff;
    }
    @media(max-width: 320px){
        #datepickers-container .datepicker.active{
            left: 60px !important;
        }
    }
    .form-group{
        margin-bottom: 0.5rem;
    }
    .date_picker input,.clockpicker-with-callbacks .date_picker div{
        width: 100%;
        border:none;
    }
    .date_picker input:focus{
        outline: none;
    }
    .vdp-datepicker__calendar .cell.selected{
        background-color: #428bca !important;
        color:#fff;
    }
    .content{
        min-height: 145vh;
    }
    .popover-container,.input-group .form-control{
        z-index: inherit !important;
    }
    .picker .popover-origin{
        z-index: 99 !important;
    }
    .flatpickr-day.selected{
        background-color: #428bca !important;
    }
    .flatpickr-day.today{
        background-color: #eee !important;
    }
    .flatpickr-input[readonly="readonly"]{
        background-color: #fff;
    }
    .clockpicker-with-callbacks .date_picker div{
        width: 100%;
        left:-18px;
    }
    flatpickr-day today selected{
        color: #333;
    }
    @media(max-width: 320px){

        .popover-origin.direction-bottom.align-left{
            left: -47px !important;
        }
        .clockpicker-with-callbacks .date_picker div{
            width: 270px;
        }
    }
</style>
