<template>
  <div class="sign-in">
    <v-card class="mx-auto my-12" width="374">
      <v-card-title class="d-flex justify-center">
        <h1>Sign In</h1>
      </v-card-title>
      <v-form>
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
            <v-btn color="#4388A2" class="white--text">Submit</v-btn>
          </v-card-actions>
        </v-container>
      </v-form>
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
};
</script>
