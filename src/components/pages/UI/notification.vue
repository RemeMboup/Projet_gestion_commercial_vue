<template>
    <div>
        <div id="toast-container" class="toast-top-right" v-show="notification">
            <div class="toast toast-success" aria-live="polite" style="">
                <div class="toast-message">
                    {{notification}}
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    // props: ['details', 'action_from'],
    computed: {

        notification () {
            console.log('Something went wrong!')
            if(this.$store.getters.selected_notification){
                console.log('notification timeout ended')
                setTimeout(() => {
                    const notification = null
                    this.$store.dispatch('generateNotification', notification)
                }, 3000);
            }
            return this.$store.getters.selected_notification
        },

       
    }
}
</script>

<style scoped>
    
</style>
