<template>
  <div class="app-bar">
    <v-app-bar app>
      <v-toolbar-title >
      <v-btn to="/home" plain class="white--text">Social App</v-btn>
      
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="!token">
        <v-btn text class="mx-2 white--text" to="/sign-in">Sign in</v-btn>
        <v-btn text class="white--text" to="/sign-up">Sign up</v-btn>
      </div>
      <div v-else>
          <v-avatar></v-avatar>
          <v-btn text class="white--text" @click="logout">Logout</v-btn>
      </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: null,
    };
  },
  created() {
    console.log("inside created");
    if (process.client) {
      console.log("[created]: ",process.client);
      const token = localStorage.getItem("token");
      console.log("[created]: ",token);
      if (token) {
        this.token = token;
      }
    }
  },
  methods:{
      logout(){
          this.$store.dispatch("user/removeToken")
          this.$router.push('/sign-in')
      }
  }
};
</script>

<style >
.v-app-bar {
  background: #5c258d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4389a2,
    #5c258d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4389a2,
    #5c258d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>