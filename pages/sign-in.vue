<template>
  <div class="sign-in">
    <v-card class="mx-auto my-12" width="374">
      <v-card-title class="d-flex justify-center">
        <h1>Sign In</h1>
      </v-card-title>

      <v-container>
        <v-card-text>
          <v-text-field
            label="Enter email"
            placeholder="Email"
            outlined
            clearable
            hide-details="auto"
            v-model="email"
          ></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-text-field
            type="password"
            label="Enter password"
            placeholder="Password"
            outlined
            clearable
            hide-details="auto"
            v-model="password"
          ></v-text-field>
        </v-card-text>

        <v-card-actions class="d-flex justify-end pr-4">
          <v-btn color="#4388A2" class="white--text" @click="onSubmit" @keyup.enter="onSubmit"
            >Submit</v-btn
          >
        </v-card-actions>
      </v-container>
    </v-card>
    <v-row class="justify-center">
      <nuxt-link to="/sign-up">Sign-up</nuxt-link>
    </v-row>
  </div>
</template>
<script>
export default {
  layout: "custom",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
      console.log('on submit')
      if (!this.email || !this.password) {
        alert("email or password missing");
      }
      const body = {
        email: this.email,
        password: this.password,
      };
    
      try {
        const res = await fetch(
          "https://social-app-leslie.herokuapp.com/api/user/sign-in",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }
        );
        const data = await res.json();
        if (data.err) {
          alert(data.err);
        } else {
          alert("user successfully logged in");
          this.$store.dispatch('user/saveToken', data.token)
          this.$router.push("/home");
        }
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>
