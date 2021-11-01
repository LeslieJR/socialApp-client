<template>
  <div class="app-bar">
    <v-app-bar app>
      <!-- <v-toolbar class="hidden-xs-and-down">
        <v-toolbar-items v-if="!token">
          <v-btn text class="mx-2 white--text" to="/sign-in">Sign in</v-btn>
          <v-btn text class="white--text" to="/sign-up">Sign up</v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
          <v-avatar v-if="avatar">
            <v-img :src="avatar"></v-img>
          </v-avatar>
          <v-btn text class="white--text" @click="logout">Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn to="/home" plain class="white--text">Social App</v-btn>
      </v-toolbar-title>
 -->
      <v-toolbar class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-navigation-drawer v-model="drawer" height="100" absolute temporary>
          <v-list nav dense v-if="!token">
            <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>
                    <a to="/sign-in">Sign in</a>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                    <a to="/sign-up">Sign in</a>
                </v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list v-else>
            <v-list-tile>
              <v-list-tile-content>
                <v-btn text class="white--text" @click="logout">Logout</v-btn>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-spacer></v-spacer>
      <v-toolbar-title
        >
        <v-btn to="/home" plain class="white--text">Social App</v-btn>
        </v-toolbar-title
      >
      </v-toolbar>
      
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      token: null,
      avatar: undefined,
      drawer: false,
      group: null,
    };
  },
  created() {
    if (process.client) {
      const token = localStorage.getItem("token");
      const avatar = localStorage.getItem("avatar");
      if (token && avatar) {
        this.token = token;
        this.avatar = avatar;
      }
    }
  },

  methods: {
    logout() {
      this.$store.dispatch("user/removeToken");
      //this.$router.push('/sign-in')
    },
  },
};
</script>

<style >
.v-app-bar,
.v-toolbar {
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