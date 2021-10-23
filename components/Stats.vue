<template>
  <div class="stats">
    <Card title="Stats" icon="mdi-chart-box">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-file-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Images 0</v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-comment</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Comments 0 </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-eye-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Views 0 </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-thumb-up</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Likes 0 </v-list-item-content>
        </v-list-item>
      </v-list>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count_img: 0,
      count_comments: 0,
      views: 0,
      likes: 0,
    };
  },
  mounted() {
    this.getStats();
  },
  methods: {
    async getStats() {
      try {
        const res = await fetch(
          "https://social-app-leslie.herokuapp.com/api/post/stats"
        );
        const data = await res.json();
        console.log("[getStats] ",data)
        if(data.err){
          console.log(data.err)
        }
        
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
