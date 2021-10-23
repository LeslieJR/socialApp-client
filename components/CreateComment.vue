<template>
  <div class="rs-post-comment">
    <Card title="Comment">
      <v-text-field placeholder="Titulo" hide-details="auto" solo class="mb-2"></v-text-field>
      <v-textarea hide-details solo label="Write your comment"></v-textarea>
      <div class="d-flex justify-end">
        <v-btn class="mt-2 white--text" color="#4387A2">Post</v-btn>
      </div>
      
    </Card>
  </div>
</template>