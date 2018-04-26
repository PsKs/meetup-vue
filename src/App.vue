<template>
    <v-app>
        <v-toolbar dark class="primary">
            <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-toolbar-title>MeetUp VUE</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat>
                    <v-icon left>supervisor_account</v-icon>
                    View Meetup
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer v-model="sideNav">
            <v-list dense class="pt-0">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>supervisor_account</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>View Meetup</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            sideNav: false
        }
    },
    name: 'App'
}
</script>
