<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  watch:{
    '$store.state.user.token'(value){
      if(value){
        this.$router.push('/home')
      }

    }
  }
}
</script>
