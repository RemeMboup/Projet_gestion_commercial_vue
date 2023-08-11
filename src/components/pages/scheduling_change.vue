<template>
<div>
  <!-- Load icon library -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- The form -->
<form class="example">
  <input type="text" placeholder="Search.." v-model="schedchange.dk">
  <button  @click="getSchedChange(schedchange.dk)"><i class="fa fa-search"></i></button>
</form>
  <div class="m-table" style="overflow-x:auto;">
  <table class="table is-bordered is-striped is-narrow">
  <thead>
    <tr>
      <th>Pnr</th>
      <th>CC_Agent</th>
      <th>T_PCC</th>
      <th>Status</th>
      <th>Pax_Names</th>
      <th>Is_Ticket</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <router-link to="details_sched">
      <td>{{schedchange.pnr}}</td>
      <td>{{schedchange.cc_agent}}</td>
      <td>{{schedchange.t_pcc}}</td>
      <td>{{schedchange.status}}</td>
      <td>{{schedchange.pax_names}}</td>
      <td>{{schedchange.is_ticket}}</td>
      </router-link>
    </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    mounted: function () {
        console.log(this.$store.state.token)
    },
    computed: {
        /* This follows methods retrieve data from store which become availables in this views */
        schedchange () {
            return this.$store.state.schedchange
        }
       
    },
    methods: {
    
        getSchedChange (dk) {
            console.log('I am there!')
            console.log(this.$store.state.token)
                axios({
                    url:'http://52.151.59.23/api/gds/schedchange/?dk='+ dk,
                    method: 'get',
                    headers: {
                        'Content-type': 'application/json',
                        'Authorization': 'Bearer ' + this.$store.getters.token
                    }
                }).then(response => {
                    console.log('hello')
                    console.log(response)
                    this.$store.state.schedchange = response.data
                    console.log(this.$store.state.schedchange)
                    //this.$router.push('/')
                }).catch(error => {
                    console.log(error)
                })

        }
    }
}
</script>
<style>
tr:nth-child(even) {
    background-color: #f2f2f2
}
/* Style the search field */
form.example input[type=text] {
  padding: 10px;
  font-size: 17px;
  border: 1px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}

/* Style the submit button */
form.example button {
  float: left;
  width: 20%;
  padding: 10px;
  background: #2196F3;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none; /* Prevent double borders */
  cursor: pointer;
}

form.example button:hover {
  background: #0b7dda;
}

/* Clear floats */
form.example::after {
  content: "";
  clear: both;
  display: table;
}
</style>
