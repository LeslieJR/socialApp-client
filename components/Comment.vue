<template>
    <div class="comment-item">
        <v-row class="pa-1">
            <v-col cols="4">
                <v-img :src="image"/>
            </v-col>
            <v-col cols="8">
                <strong>{{email}}</strong>
                <p>{{comment}}</p>
            </v-col>
        </v-row>
    </div>
</template>
<script>

export default {
    props:{
        image:{
            type: String,
            required: true
        },
        comment:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        }
    },
}
</script>
