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
            <v-btn class="primary">
              <v-icon class="pr-1">mdi-thumb-up </v-icon>
              Like
            </v-btn>
            <v-chip class="ma-2" color="indigo darken-3" outlined>
              <v-icon class="pr-1">mdi-cards-heart</v-icon>
              Likes 12
            </v-chip>
            <v-chip class="ma-2" color="indigo darken-3" outlined>
              <v-icon class="pr-1">mdi-eye-settings</v-icon>
              Views 20
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
      image:
        "https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg",
      title: "Image title",
      description: "Something here",
      date:"12/06/2019"
    };
  },
};
</script>
<style>
.date{
    text-align: end;
}
</style>
