<template>
    <v-app>     
        <v-navigation-drawer temporary fixed v-model="sideNav">
            <v-list dense class="pt-0">
                <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark class="primary">
            <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
            <v-toolbar-title>
                <router-link to="/" tag="span" style="cursor: pointer">MeetUp VUE</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
                    <v-icon left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-content>
            <v-container fluid>
                <main>
                    <router-view></router-view>
                </main>
            </v-container>
        </v-content> 
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            sideNav: false,
            menuItems: [
                { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
                { icon: 'room', title: 'Organize Meetups', link: '/meetup/new' },
                { icon: 'person', title: 'Profile', link: '/profile' },
                { icon: 'face', title: 'Sign up', link: '/signup' },
                { icon: 'lock_open', title: 'Sign in', link: '/signin' }
            ]
        }
    },
    name: 'App'
}
</script>
