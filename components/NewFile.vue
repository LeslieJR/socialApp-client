<template>
  <div class="upload-file pt-2">
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
        console.log("[New Post] onsubmit");
        if (!this.image || !this.title || !this.description) {
          alert("REQUIRED FIELD EMPTY");
          return;
        }
        //create a form
        const formData = new FormData();
        formData.enctype = "multipart/form-data";
        formData.append("image", this.image);
        formData.append("title", this.title);
        formData.append("description", this.description);

        const token = localStorage.getItem("token");

        const res = await fetch(
          "https://social-app-leslie.herokuapp.com/api/post/upload",
          {
            method: "POST",
            headers: {
              token: token,
            },
            body: formData,
          }
        );
        const data = await res.json();
        if (data.err) {
          alert(data.err);
        } else {
          alert("POST CREATED");
        }
      } catch (err) {
        alert(err.message);
      }
    },
  },
};
</script>
