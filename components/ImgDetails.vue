<template>
  <div class="image-details">
    <Card :title="title" :remove="true">
      <div class="rs-image-details">
        <v-row class="rs-image">
          <v-col>
            <v-img :src="image" height="400px"></v-img>
          </v-col>
        </v-row>
        <v-row class="rs-details">
          <v-col>
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
          </v-col>
        </v-row>
        <v-row class="rs-info">
          <v-col cols="8">
            <v-btn class="primary" >
              <v-icon class="pr-1">mdi-thumb-up </v-icon>
              Like
            </v-btn>
            <v-chip class="ma-2" color="indigo darken-3" outlined>
              <v-icon class="pr-1">mdi-cards-heart</v-icon>
              Likes: {{likes}}
            </v-chip>
            <v-chip class="ma-2" color="indigo darken-3" outlined>
              <v-icon class="pr-1">mdi-eye-settings</v-icon>
              Views: {{views}} 
            </v-chip>
           
          </v-col>
          <v-col cols="4" class="date d-flex justify-end">
               <v-chip class="ma-2"  color="transparent">
                {{date}}         
            </v-chip>
          </v-col>
        </v-row>
      </div>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: undefined,
      title: "",
      description: "",
      likes:0,
      views:0,
      date:"12/06/2019"
    };
  },
  async mounted(){
    await this.loadDetails()
  },
  methods:{
    async loadDetails(){
      try{
        const res = await fetch(`http://localhost:4000/api/post/details/${this.$route.params.id}`)
        const data = await res.json();
        this.image = data.post.image
        this.title = data.post.title
        this.description = data.post.description
        this.likes = data.post.likes
        this.views = data.post.views
      }catch(err){
        console.log({err: err.message})
      }
    }
  }
};
</script>
<style>
.date{
    text-align: end;
}
</style>
