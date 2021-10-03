<template>
  <div class="popular">
    <Card title="Latest Comments" icon="mdi-comment">
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :image="comment.image"
        :email="comment.email"
        :comment="comment.comment"
      />
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [
        {
          id: 0,
          image: "https://picsum.photos/id/241/200/300",
          email: "leslie@reyes.com",
          comment: "Awesooooome pic",
        },
        {
          id: 1,
          image: "https://picsum.photos/id/242/200/300",
          email: "marta@gmail.es",
          comment: "Nice Pic",
        },
        {
          id: 2,
          image: "https://picsum.photos/id/243/200/300",
          email: "pepe@gmail.com",
          comment: "Woooow :O",
        },
      ],
    };
  },
};
</script>
