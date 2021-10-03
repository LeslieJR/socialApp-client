<template>
  <v-app >
    <AppBar />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="8">
            <Nuxt />
          </v-col>
          <v-col cols="4">
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
  data () {
    return {
     
    }
  }
}
</script>
