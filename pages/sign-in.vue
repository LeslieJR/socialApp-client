<template>
    <div class="sign-in">
        <v-card class="mx-auto my-12" width="374">
      <v-card-title class="mt-4">
        <v-row align="center" justify="center">
          <h1>Sign In</h1>
        </v-row>
      </v-card-title>
      <v-form>
        <v-container>
          <v-row>
            <v-col>
              <v-text-field
                label="Enter email"
                placeholder="Email"
                outlined
                clearable
                hide-details="auto"
                v-model="email"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
              type="password"
                label="Enter password"
                placeholder="Password"
                outlined
                clearable
                hide-details="auto"
                v-model="password"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="9" offset-md="4">
              <v-btn class="primary">Submit</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <v-row class="justify-center">
      <nuxt-link  to="/sign-up">Sign-up</nuxt-link>  
    </v-row>

    </div>
</template>
<script>

export default {
    layout: 'custom',
    data() {
    return{
      email:"",
      password:""
    }
  },
}
</script>
