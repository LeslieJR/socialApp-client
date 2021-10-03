<template>
  <div class="upload-file">
    <Card title="Upload File" icon="mdi-upload">
      <div class="upload-container">
        <v-form>
          <v-file-input
            outlined
            prepend-icon=""
            label="Image"
            append-icon="mdi-file-upload"
          ></v-file-input>
          <v-text-field
            outlined
            name="title"
            placeholder="Title"
          ></v-text-field>
          <v-textarea
            outlined
            name="description"
            placeholder="Image Description"
          ></v-textarea>
          <div class="d-flex justify-end">
            <v-btn color="#4387A2" class="white--text">Submit</v-btn>
          </div>
        </v-form>
      </div>
    </Card>
  </div>
</template>
<style  >
.upload-container{
    padding-top: 10px;
}


</style>