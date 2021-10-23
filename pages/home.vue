<template>
<div class="home">
  <NewFile class="mb-4" v-if="isAuth"/>
  <RecentUploads />
</div>
  
</template>
<script>
export default {
  computed:{
    //only users who are logged in (token) can upload post
    isAuth(){
      return this.$store.getters['user/getToken']
    }
  }
}
</script>
