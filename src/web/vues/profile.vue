<template lang="pug">
    v-container(fluid fill-height)
        v-layout(justify-center)
            v-flex(xs12 sm8 md4)
            
                v-card(class="elevation-12")
                
                    v-toolbar( dark color="primary")
                        v-toolbar-title Login

                    v-card-text
                        v-form
                            v-text-field(prepend-icon="person" name="login" label="Username" type="text")
                            v-text-field(id="password" prepend-icon="lock" name="password" label="Password" type="password")

                    v-card-actions
                        v-spacer
                        v-btn(color="primary") Login

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


