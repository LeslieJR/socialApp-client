<template>
    <div class="details-id">
        <ImgDetails class="mb-4" />
        <CreateComment class="mb-4" v-if="isAuth"/>
        <AllComments />
    </div>
</template>
<script>
export default {
    computed:{
    //only users who are logged in (token) can comment
    isAuth(){
      return this.$store.getters['user/getToken']
    }
  }
}
</script>
