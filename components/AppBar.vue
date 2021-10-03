<template>
    <div class="app-bar">
        <v-app-bar app>
        <v-toolbar-title class="white--text">Social App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text class="mx-2 white--text">sign in</v-btn>
        <v-btn text class="white--text">sign up</v-btn>
    </v-app-bar>
    </div>
</template>
<style >
.v-app-bar{
    background: #5C258D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #4389A2, #5C258D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #4389A2, #5C258D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
</style>