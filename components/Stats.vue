<template>
  <div class="stats">
    <Card title="Stats" icon="mdi-chart-box">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-file-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Images: {{count_img}}</v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-comment</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Comments: {{count_comments}}</v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-eye-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Views: {{views}}</v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Likes: {{likes}} </v-list-item-content>
        </v-list-item>
      </v-list>
    </Card>
  </div>
</template>
<script>
import {getStatistics} from '../services'
export default {
  data() {
    return {
      count_img: 0,
      count_comments: 0,
      views: 0,
      likes: 0,
      onFetch: undefined
    };
  },
  async beforeMount() {
    await this.getStats();
    this.onFetch = setInterval(async () => {
      await this.getStats();
    }, 2000);
  },
  
  beforeDestroy() {
    clearInterval(this.onFetch)
  },

  methods: {
    async getStats() {
      try {
        const data = await getStatistics()
        this.count_img = data.count_img
        this.count_comments = data.count_comments
        this.views = data.views
        this.likes = data.likes
        
        if(data.err){
          alert(data.err)
        }
        
      } catch (err) {
        alert({err: err.message});
      }
    },
  },
};
</script>
