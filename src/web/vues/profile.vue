<template lang="pug">
    div 
        h1 Profile
        p  Welcome: {{$store.state.name}}
        div.form 
            table
                tr
                    td Name
                    td
                        input(:value="$store.state.name" @input="$store.commit('setName',$event.target.value)")
</template>

<script>
    export default {
        
    }
</script>
<style lang="scss" scoped>
    .form {
        display: flex;
        justify-content: center;
    }
</style>


