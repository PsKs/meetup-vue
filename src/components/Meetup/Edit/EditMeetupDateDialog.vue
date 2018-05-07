<template>
    <v-dialog width="350px" persistent v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Date
        </v-btn>
        <v-card>
            <v-container>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title>
                            Edit Meetup Date
                        </v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-date-picker v-model="editableDate" style="width: 100%" actions>
                            <template slot-scope="save, cancel">
                                <v-btn flat class="blue--text darken-1" @click.native="editDialog = false">Close</v-btn>
                                <v-btn flat class="blue--text darken-1" @click.native="onSaveChanges">Save</v-btn>
                            </template>
                        </v-date-picker>
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
            editableDate: null
        }
    },
    methods: {
        onSaveChanges () {
            const time = moment(this.meetup.date).format('HH:mm')
            this.$store.dispatch('updateMeetupData', {
                id: this.meetup.id,
                date: moment(this.editableDate + ' ' + time).format()
            })
        }
    },
    created () {
        this.editableDate = moment(this.meetup.date).format('YYYY-MM-DD')
    }
}
</script>
