<template>
  <div class="rs-card">
    <v-card>
      <v-card-title
        v-if="header"
        :class="remove ? 'rs-remove' : 'rs-card-title'"
      >
        <div v-if="remove" class="rs-card-remove d-flex justify-space-between">
          <h2 class="white--text">{{ title }}</h2>
          <v-btn color="#D32F2F" class="white--text" @click="deletePost"
            >Delete</v-btn
          >
        </div>
        <div v-else class="rs-card-noremove d-flex">
          <v-icon align="start" large color="white" class="pr-2">{{
            icon
          }}</v-icon>
          <h2 class="title-noremove white--text">{{ title }}</h2>
        </div>
      </v-card-title>
      <v-card-text class="pt-2">
        <slot />
      </v-card-text>
    </v-card>
  </div>
</template>
<script>
import {deletePost} from '../services'
export default {
  props: {
    title: {
      type: String,
    },
    header: {
      type: Boolean,
      default: true,
    },
    icon: {
      type: String,
      default: undefined,
    },
    remove: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    async deletePost() {
      try {
        const post_id= this.$route.params.id
        const data = await deletePost(post_id)
        if(data.err){
          alert(data.err)
        }
        this.$router.push('/home');
      } catch (err) {
        alert({ err: err.message });
      }
    },
  },
};
</script>
<style >
.rs-card-title {
  background-color: #583590;
}
.rs-remove {
  background-color: #c3abd0;
}
.rs-card-remove {
  width: 100%;
}
</style>