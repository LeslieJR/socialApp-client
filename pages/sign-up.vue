<template>
  <div class="sign-up">
    <v-card class="mx-auto my-12" width="374">
      <v-card-title class="d-flex justify-center">
        <h1>Sign Up</h1>
      </v-card-title>

      <v-card-text>
        <v-file-input
          outlined
          prepend-icon=""
          label="Avatar"
          append-icon="mdi-baby-face-outline"
          hide-details
          v-model="avatar"
          required
        ></v-file-input>
      </v-card-text>

      <v-card-text>
        <v-text-field
          label="Enter email"
          placeholder="Email"
          outlined
          clearable
          hide-details
          v-model="email"
          required
        ></v-text-field>
      </v-card-text>

      <v-card-text>
        <v-text-field
          type="password"
          label="Enter password"
          placeholder="Password"
          outlined
          clearable
          hide-details
          v-model="password"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-text>
        <v-text-field
          type="password"
          label="Confirm password"
          placeholder="Confirm Password"
          outlined
          clearable
          hide-details="auto"
          v-model="password2"
          required
        ></v-text-field>
      </v-card-text>

      <v-card-actions class="d-flex justify-end pr-4">
        <v-btn color="#4388A2" class="white--text" @click="onSubmit"
          >Submit</v-btn
        >
      </v-card-actions>
    </v-card>
    <v-row class="justify-center">
      <nuxt-link to="/sign-in">Sign-in</nuxt-link>
    </v-row>
  </div>
</template>

<script>
import {signUp} from '../services'
export default {
  layout: "custom",
  data() {
    return {
      avatar: undefined,
      email: "",
      password: "",
      password2: "",
    };
  },
  asyncData(ctx) {
    const token = ctx?.store.state.user.token;

    if (token) {
      ctx.redirect("/home");
    }
  },
  /*beforeMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.$router.push("/home");
    }
  },*/
  created() {
    if (process.client) {
      const token = localStorage.getItem("token");
      if (token) {
        this.$router.push("/home");
      } else {
        // this.isValid = true
      }
    }
  },
  computed: {
    token() {
      return this.$store.state.user.token;
    },
  },
  methods: {
    async onSubmit() {
      try {
        if (this.password !== this.password2) {
          alert("PASSWORDs DO NOT MATCH");
          return;
        }
        const data = await signUp(this.avatar, this.email, this.password, this.password2)
        if (data.err) {
          alert(data.err);
        } else {
          this.$router.push("/sign-in");
        }
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>