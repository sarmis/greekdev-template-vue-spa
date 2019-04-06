<template>
    <div> 
        <h1>Home</h1> 
        <p> Welcome: {{$store.state.name}}</p>
       
    </div>   
</template>


<script>
    export default {
        data: function() {
            return {
                name: 'ukn'
            }
        }
    }
</script>
