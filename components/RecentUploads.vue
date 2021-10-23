<template>
  <div class="recent-uploads">
    <Card title="Recent Uploads" icon="mdi-folder-multiple-image">
      <v-row class="pt-1 pb-1">
        <v-col cols="3" v-for="upload in uploads" :key="upload.id">
          <v-card @click="details(upload._id)">
            <v-card-text>
              <v-img :src="upload.image" />
            </v-card-text>
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
    };
  },
  async mounted(){
    await this.loadPosts()
  },
  methods:{
    async loadPosts(){
      try{
        const res = await fetch('https://social-app-leslie.herokuapp.com/api/post/recent-uploads')
        const data = await res.json();
        console.log("RecentUploads [loadPosts]",data)
      }catch(err){

      }
    },
    details(postId){

    }
  }
};
</script>
