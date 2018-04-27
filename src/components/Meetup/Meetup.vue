<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                        <h2 class="primary--text">{{ meetup.title }}</h2>
                    </v-card-title>
                    <v-card-media 
                        :src="meetup.imageUrl" 
                        height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date }} - Where it takes place</div>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis, augue id sollicitudin convallis, metus elit congue nisi, laoreet pretium est erat ut ipsum. Fusce ornare bibendum lorem, vel ornare turpis consequat eget. Nunc pharetra et enim nec accumsan. Ut sem erat, sollicitudin convallis cursus nec, congue a lacus. Cras laoreet mauris sed mauris mollis consectetur. In hac habitasse platea dictumst. Suspendisse potenti. Aenean ligula lorem, fermentum non gravida vitae, fermentum ac sapien. Morbi pretium hendrerit justo, in fermentum libero finibus ut.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark class="red darken-3">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetup () {
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>
