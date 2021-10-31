<template>
<div class="home">
  <RecentUploads />
  <NewFile class="mb-4" v-if="isAuth"/>
  
</div>
  
</template>
<script>
export default {
  /* computed:{
    //only users who are logged in (token) can upload post
    isAuth(){
      return this.$store.getters['user/getToken']
    }
  } */

  //recargas blandas
  asyncData(ctx){
    const isAuth = ctx.store.state.user.token;
    return{
      isAuth: isAuth
    }
  },

  //recargas duras
  mounted(){
    this.isAuth = this.$store.state.user.token;
  }
}
</script>
