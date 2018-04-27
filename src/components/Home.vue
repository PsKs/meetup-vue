<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large router to="/meetups" class="info">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large router to="/meetup/new" class="info">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            meetups: [
                { imageUrl: 'https://cnet1.cbsistatic.com/img/t0zSAQE-tnW5MbFnaYVjumgafvw=/936x527/2009/11/25/a732b5d0-f0fd-11e2-8c7c-d4ae52e62bcc/noisebridge8.jpg', id: 'dzzsds', title: 'Meetup in Noisebridge' },
                { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Contest_area_Def_Con_24.agr.jpg', id: '5ww3rw', title: 'Meetup in DEF CON' },
                { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Maker_Faire_2008_spinning_lights.jpg', id: 't6ur5y', title: 'Meetup in Maker Faire' }
            ]
        }
    }
}
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 2em;
        padding: 10px;
    }
</style>
