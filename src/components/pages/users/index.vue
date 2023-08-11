<template>
  <div>
    <b-form>
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="email"
                      type="email"
                      v-model="user.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="first_name"
                      type="text"
                      v-model="user.first_name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="last_name"
                      type="text"
                      v-model="user.last_name"
                      required
                      placeholder="Last_Name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="password"
                      type="password"
                      v-model="user.password"
                      required
                      placeholder="Enter Password">
        </b-form-input>
      </b-form-group>
      <b-button @click="add" variant="primary">Submit</b-button>
      <b-button  variant="danger">Cancel</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: {
            email: '',
            first_name: '',
            last_name: '',
            password: null,
        }
      
      }
    },
    mounted() {

    },
    methods: {
      add() {
        console.log('Add affiliate button clicked')
        if (this.user.email != '') {
          this.$store.dispatch('addUser', { 
              email: this.user.email ,
              first_name: this.user.first_name ,
              last_name: this.user.last_name ,
              password: this.user.password
                            
          })
          this.$router.push('/')
        }
        else {
          console.log('Name is required')
        }
      },
      cancel () {
        this.user.email = '';
        this.user.first_name = '';
        this.user.last_name = '';
        this.user.password = '';
    }
    },
    computed: {

    }
  }
</script>

