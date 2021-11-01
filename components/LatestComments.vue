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
import {latestComments} from '../services'
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
        const data = await latestComments();
        this.comments = data
        
      }catch(err){
        alert({err: err.message})
      }
    }
  }
};
</script>
