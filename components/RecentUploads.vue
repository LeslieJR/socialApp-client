<template>
  <div class="recent-uploads">
    <Card title="Recent Uploads" icon="mdi-folder-multiple-image">
      <v-row class="pt-1 pb-1">
        <v-col cols="3" v-for="upload in uploads" :key="upload.id">
          <v-img :src="upload.image" />
        </v-col>
      </v-row>
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uploads: [
        {
          id: 0,
          image: "https://picsum.photos/id/223/200/300",
        },
        {
          id: 1,
          image: "https://picsum.photos/id/232/200/300",
        },
        {
          id: 2,
          image: "https://picsum.photos/id/236/200/300",
        },
        { 
            id: 3, 
            image: "https://picsum.photos/id/230/200/300" 
        },
        { 
            id: 4, 
            image: "https://picsum.photos/id/248/200/300" 
        },
        { 
            id: 5, 
            image: "https://picsum.photos/id/249/200/300" 
        },
        { 
            id: 6, 
            image: "https://picsum.photos/id/250/200/300" 
            },
        { 
            id: 7, 
            image: "https://picsum.photos/id/251/200/300" 
        },
        { 
            id: 8, 
            image: "https://picsum.photos/id/252/200/300" 
        },
        { 
            id: 9, 
            image: "https://picsum.photos/id/253/200/300" 
        },
        { 
            id: 10, 
            image: "https://picsum.photos/id/254/200/300" 
        },
        { 
            id: 11, 
            image: "https://picsum.photos/id/255/200/300" 
        },
      ],
    };
  },
};
</script>
