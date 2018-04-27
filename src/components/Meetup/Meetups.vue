<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm2>
                <v-card class="amber lighten-1">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media 
                                    src="https://cnet1.cbsistatic.com/img/t0zSAQE-tnW5MbFnaYVjumgafvw=/936x527/2009/11/25/a732b5d0-f0fd-11e2-8c7c-d4ae52e62bcc/noisebridge8.jpg" 
                                    height="130px">
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text mb-2">My meetup</h2>
                                        <div>17th July 2018</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/meetup/1">
                                        <v-icon left light>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
