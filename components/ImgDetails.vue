<template>
  <div class="image-details">
    <Card :title="title" :remove="isOwner">
      <div class="rs-image-details">
        <v-row class="rs-image">
          <v-col>
            <v-img :src="image" height="400px"></v-img>
          </v-col>
        </v-row>
        <v-row class="rs-details">
          <v-col>
            <h2>{{ title }}</h2>
            <p class="mb-0">{{ description }}</p>
          </v-col>
        </v-row>
        <v-row class="rs-info mt-0 pa-0">
          <v-col cols="12">
            <v-col class="pa-0">
              <v-btn class="primary" @click="onLike">
                <v-icon class="pr-1">mdi-thumb-up </v-icon>
                Like
              </v-btn>
            </v-col>
            <v-col class="pa-0">
              <v-chip color="indigo darken-3" outlined>
                <v-icon class="pr-1">mdi-cards-heart</v-icon>
                Likes: {{ likes }}
              </v-chip>
              <v-chip class="ma-2" color="indigo darken-3" outlined>
                <v-icon class="pr-1">mdi-eye-settings</v-icon>
                Views: {{ views }}
              </v-chip>
            </v-col>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="date d-flex justify-end pa-0">
            <span class="pr-4 pb-2" color="transparent">
              {{ date }}
            </span>
          </v-col>
        </v-row>
      </div>
    </Card>
  </div>
</template>
<script>
import { getDetails, getViews, giveLike } from "../services";
export default {
  data() {
    return {
      image: undefined,
      title: "",
      description: "",
      likes: 0,
      views: 0,
      date: "12/06/2019",
      isOwner: false,
      onFetch: undefined,
    };
  },
  async beforeMount() {
    await this.loadDetails();
    this.onFetch = setInterval(async () => {
      await this.loadLikesAndViews();
    }, 2000);
  },
  beforeDestroy() {
    clearInterval(this.onFetch);
  },
  methods: {
    async loadLikesAndViews() {
      try {
        const post_id = this.$route.params.id;
        const token = localStorage.getItem("token");

        const data = await getDetails(post_id, token);
        if (data.err) {
          alert(data.err);
        }
        this.likes = data.post.likes;
        this.views = data.post.views;
      } catch (err) {
        alert(err.message);
      }
    },
    async loadDetails() {
      try {
        const post_id = this.$route.params.id;
        const token = localStorage.getItem("token");

        const data = await getViews(post_id);

        if (data.err) {
          alert(data.err);
        }

        const data2 = await getDetails(post_id, token);

        if (data2.err) {
          alert(data2.err);
        }
        this.isOwner = data2.isOwner;
        this.image = data2.post.image;
        this.title = data2.post.title;
        this.description = data2.post.description;
        this.likes = data2.post.likes;
        this.views = data2.post.views;
      } catch (err) {
        alert({ err: err.message });
      }
    },
    async onLike() {
      try {
        const post_id = this.$route.params.id;
        const data = await giveLike(post_id);
        if (data.err) {
          alert(data.err);
        }
      } catch (err) {
        alert({ err: err.message });
      }
    },
  },
};
</script>
<style>
.date {
  text-align: end;
}
</style>
