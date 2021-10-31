<template>
  <div class="comment-item">
    <v-row class="pa-1">
      <v-col cols="4">
        <v-img :src="image" @click="details(post_id)" aspect-ratio="1"/>
      </v-col>
      <v-col cols="8">
        <strong>{{ email }}</strong>
        <p>{{ comment }}</p>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    post_id: {
      type: String,
      required: true,
    },
  },
  methods: {
    details(postId) {
      this.$router.push(`/details/${postId}`);
    },
  },
};
</script>
