<template>
  <v-app >
    <AppBar />
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col :cols="cols1">
            <Nuxt />
          </v-col>
          <v-col :cols="cols2">
            <Stats />
            <Popular class="mt-4"/>
            <LatestComments class="mt-4"/>
          </v-col>
        </v-row>
        
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  beforeMount(){
    const token = localStorage.getItem('token');
    if(token){
      this.$store.commit('user/setToken', token)
    }
  },
  computed: {
      cols1 () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 12
          case 'sm': return 12
          case 'md': return 8
        }
      },
      cols2 () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 12
          case 'sm': return 12
          case 'md': return 4
        }
      },
    },
  watch: {
    '$store.state.user.token'(value) {
      if (!value) {
        this.$router.push('/sign-in')
      }
    }
  }
}
</script>
