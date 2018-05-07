<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Time
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>
                            Edit Meetup Time
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-time-picker v-model="editableTime" style="width: 100%" actions>
                            <template slot-scope="save, cancel">
                                <v-btn flat class="blue--text darken-1" @click.native="editDialog = false">Close</v-btn>
                                <v-btn flat class="blue--text darken-1" @click.native="onSaveChanges">Save</v-btn>
                            </template>
                        </v-time-picker>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import moment from 'moment'

export default {
    props: ['meetup'],
    data () {
        return {
            editDialog: false,
            editableTime: null
        }
    },
    methods: {
        onSaveChanges () {
            const date = moment(this.meetup.date).format('YYYY-MM-DD')
            this.$store.dispatch('updateMeetupData', {
                id: this.meetup.id,
                date: moment(date + ' ' + this.editableTime).format()
            })
        }
    },
    created () {
        this.editableTime = moment(this.meetup.date).format('HH:mm')
    }
}
</script>
