<template>
  <div class="popular" v-if="this.images.length>0">
    <Card title="Most Popular" icon="mdi-cards-heart">
      <div class="img-container">
        <v-row class="pa-2">
          <v-col
            cols="6"
            class="img-item"
            v-for="image in images"
            :key="image._id"
          >
            <v-img :src="image.image" @click="details(image._id)" aspect-ratio="1"/>
          </v-col>
        </v-row>
      </div>
    </Card>
  </div>
</template>
<script>
import {popularPosts} from '../services'
export default {
  data() {
    return {
      images: [],
      onFetch: undefined,
    };
  },
  async beforeMount() {
    await this.loadPopulars();
    this.onFetch = setInterval(async () => {
      await this.loadPopulars();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.onFetch);
  },
  methods: {
    async loadPopulars() {
      try {
        const data = await popularPosts()
        this.images = data;
      } catch (err) {
        console.log({ err: err.message });
      }
    },
    details(postId) {
      this.$router.push(`/details/${postId}`)
    },
  },
};
</script>
