<template>
  <div>
    <h1>Hello Nuxt</h1>
  </div>
</template>
<script>

export default {
  asyncData(ctx){
    ctx.redirect('/home')
  }
}
</script>
