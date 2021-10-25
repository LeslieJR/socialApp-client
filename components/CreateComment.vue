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
        console.log("posting a comment");
        if (!this.title || !this.comment) {
          alert("REQUIRED FIELD(S) EMPTY");
          return;
        }
        const body = {
          post_id: this.$route.params.id,
          title: this.title,
          comment: this.comment,
        };
        console.log({ post_id: this.$route.params.id });
        const token = localStorage.getItem("token");
        const res = await fetch(
          "http://localhost:4000/api/comment/new-comment",
          {
            method: "POST",
            headers: {
              token,
            },
            body: JSON.stringify(body),
          }
        );
        const data = await res.json();
        console.log({ "[createComment]": body });
        if (data.err) {
          console.log(data);
          alert(data.err);
        } else {
          this.title = "";
          this.comment = "";
        }
      } catch (err) {
        console.log({ err: err.message });
      }
    },
  },
};
</script>
