<template>
  <div class="rs-post-comment">
    <Card title="Comment">
      <v-text-field
        placeholder="Title"
        hide-details="auto"
        solo
        class="mb-2"
        v-model="title"
      ></v-text-field>
      <v-textarea
        hide-details
        solo
        label="Write your comment"
        v-model="comment"
      ></v-textarea>
      <div class="d-flex justify-end">
        <v-btn class="mt-2 white--text" color="#4387A2" @click="postComment"
          >Post</v-btn
        >
      </div>
    </Card>
  </div>
</template>
<script>
import {createComment} from '../services'
export default {
  data() {
    return {
      title: "",
      comment: "",
    };
  },
  methods: {
    async postComment() {
      try {
        if (!this.title || !this.comment) {
          alert("REQUIRED FIELD(S) EMPTY");
          return;
        }
        const post_id = this.$route.params.id;
        const token = localStorage.getItem("token");
        
        const data = await createComment(post_id, this.title, this.comment, token)
        if (data.err) {
          alert(data.err);
        } else {
          this.title = "";
          this.comment = "";
        }
      } catch (err) {
        alert({ err: err.message });
      }
    },
  },
};
</script>
