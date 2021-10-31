<template>
  <div class="recent-uploads" v-if="this.uploads.length >0">
    <Card title="Recent Uploads" icon="mdi-folder-multiple-image">
      <v-row class="pt-1 pb-1">
        <v-col :cols="cols" v-for="upload in uploads" :key="upload.id">
          <v-card @click="details(upload._id)">
            <v-img :src="upload.image"  aspect-ratio="1"/>
          </v-card>
        </v-col>
      </v-row>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploads: [],
      onFetch: undefined,
    };
  },
  async beforeMount() {
    await this.loadPosts();
    this.onFetch = setInterval(async () => {
      await this.loadPosts();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.onFetch)
  },
  computed: {
      cols () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 6
          case 'sm': return 4
          case 'md': return 4
          case 'lg': return 4
        }
      },
    },
  methods: {
    async loadPosts() {
      try {
        const res = await fetch(
          "http://localhost:4000/api/post/recent-uploads"
        );
        const data = await res.json();
        this.uploads = data;
      } catch (err) {}
    },
    details(postId) {
      this.$router.push(`/details/${postId}`)
    },
  },
};
</script>
