<template>
  <div class="rs-all-comments" v-if="this.comments.length > 0">
    <Card :header="false">
      <div v-for="(comment, index) in comments" :key="index">
        <v-row align="center">
          <v-col cols="4" class="text-center">
            <v-avatar :size="size">
              <img alt="Avatar" :src="comment.user.avatar"/>
            </v-avatar>
          </v-col>
          <v-col cols="8" align-self="center">
            <h2>{{ comment.title }}</h2>
            <p>{{ comment.comment }}</p>
          </v-col>
        </v-row>
        <v-row v-if="index != comments.length - 1">
          <v-divider class="pt-1 pb-2"></v-divider>
        </v-row>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
      onFetch: undefined,
    };
  },
  async beforeMount() {
    await this.loadComments();
    this.onFetch = setInterval(async () => {
      await this.loadComments();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.onFetch);
  },
  computed: {
      size () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 62
          case 'sm': return 82
          case 'md': return 110
          case 'lg': return 110
        }
      },
    },
  methods: {
    async loadComments() {
      try {
        const res = await fetch(
          `http://localhost:4000/api/post/details/${this.$route.params.id}`
        );
        const data = await res.json();
        this.comments = data.comments;
      } catch (err) {
        console.log({ err: err.message });
      }
    },
  },
};
</script>