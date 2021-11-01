<template>
  <div class="upload-file">
    <Card title="Upload File" icon="mdi-upload">
      <div class="upload-container">
        <v-card-text>
           <v-file-input
            outlined
            prepend-icon=""
            label="Image"
            append-icon="mdi-file-upload"
            v-model="image"
          ></v-file-input> 

          <v-text-field
            outlined
            name="title"
            placeholder="Title"
            v-model="title"
          ></v-text-field>

          <v-textarea
            outlined
            name="description"
            placeholder="Image Description"
            hide-details="auto"
            v-model="description"
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="d-flex justify-end pr-4">
          <v-btn color="#4387A2" class="white--text" @click="onSubmit"
            >Submit</v-btn
          >
        </v-card-actions>
      </div>
    </Card>
  </div>
</template>
<script>
import {createPost} from '../services'
export default {
  data() {
    return {
      image: undefined,
      title: "",
      description: "",
    };
  },
  methods: {
    async onSubmit() {
      try {
        if (!this.image || !this.title || !this.description) {
          alert("REQUIRED FIELD EMPTY");
          return;
        }
        const token = localStorage.getItem("token");
      
        const data = await createPost(this.image, this.title, this.description, token)
        
        if (data.err) {
          alert(data.err);
        } else{
          this.image = undefined
          this.title=""
          this.description=""
        }
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>
