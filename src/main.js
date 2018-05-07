import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VCarousel,
    VCard,
    VDataTable,
    VTextField,
    VDatePicker,
    VTimePicker,
    VAlert,
    VProgressCircular,
    VDialog,
    VDivider
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog'
Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        transitions,
        VCarousel,
        VCard,
        VDataTable,
        VTextField,
        VDatePicker,
        VTimePicker,
        VAlert,
        VProgressCircular,
        VDialog,
        VDivider
    },
    theme: {
        primary: '#3F51B5',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created () {
        firebase.initializeApp({
            apiKey: 'AIzaSyBZK6MNKcJ0kDIIqq2J7JDcT9WL95Qt9G8',
            authDomain: 'vuefs-prod-a5a5e.firebaseapp.com',
            databaseURL: 'https://vuefs-prod-a5a5e.firebaseio.com',
            projectId: 'vuefs-prod-a5a5e',
            storageBucket: 'vuefs-prod-a5a5e.appspot.com',
            messagingSenderId: '189605483509'
        })
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$store.dispatch('autoSignIn', user)
            }
        })
        // First load meetups.
        this.$store.dispatch('loadMeetup')
    }
})
