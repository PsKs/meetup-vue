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
        <v-layout>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular
                    indeterminate
                    class="primary--text mt-5"
                    :width="6"
                    :size="60"
                    v-if="loading"
                >
                </v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-3" v-if="!loading">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click.native="onloadMeetup(meetup.id)">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-5">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.featuredMeetups
        },
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        onloadMeetup (id) {
            this.$router.push('/meetup/' + id)
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
