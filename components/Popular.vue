<template>
  <div class="popular">
    <Card title="Most Popular" icon="mdi-cards-heart">
      <div class="img-container">
        <v-row class="pa-2">
          <v-col cols="6" class="img-item" v-for="image in images" :key="image.id">
            <v-img :src="image.url" />
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
      images: [
        {
          id: 0,
          url: "https://picsum.photos/id/237/200/300",
        },
        {
          id: 1,
          url: "https://picsum.photos/id/238/200/300",
        },
        {
          id: 2,
          url: "https://picsum.photos/id/239/200/300",
        },
        {
          id: 3,
          url: "https://picsum.photos/id/240/200/300",
        },
      ],
    };
  },
};
</script>
