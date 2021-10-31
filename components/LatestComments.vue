<template>
  <div class="popular" v-if="this.comments.length > 0">
    <Card title="Latest Comments" icon="mdi-comment">
      <Comment
        v-for="comment in comments"
        :key="comment._id"
        :image="comment.post.image"
        :email="comment.user.email"
        :comment="comment.comment"
        :post_id="comment.post._id"
      />
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
    };
  },
  async beforeMount(){
    await this.loadComments();
     this.onFetch = setInterval(async () => {
      await this.loadComments();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.onFetch);
  },
  methods:{
    async loadComments(){
      try{
        const res = await fetch('http://localhost:4000/api/comment/latest-comments')
        const data = await res.json()
        this.comments = data
        console.log(this.comments)
      }catch(err){
        console.log({err: err.message})
      }
    }
  }
};
</script>
