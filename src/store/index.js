import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { imageUrl: 'https://cnet1.cbsistatic.com/img/t0zSAQE-tnW5MbFnaYVjumgafvw=/936x527/2009/11/25/a732b5d0-f0fd-11e2-8c7c-d4ae52e62bcc/noisebridge8.jpg', id: 'dzzsds', title: 'Meetup in Noisebridge', date: new Date(), location: 'CA', description: 'bra bra' },
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Contest_area_Def_Con_24.agr.jpg', id: '5ww3rw', title: 'Meetup in DEF CON', date: new Date(), location: 'NY', description: 'bra bra' },
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Maker_Faire_2008_spinning_lights.jpg', id: 't6ur5y', title: 'Meetup in Maker Faire', date: new Date(), location: 'TH', description: 'bra bra' }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                id: 'wwdc18',
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date
            }
            // Reach out to firebase and store it.
            commit('createMeetup', meetup)
        },
        signUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetups: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        // console.log(error)
                    }
                )
        },
        signIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit('setLoading', false)
                    const authUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', authUser)
                }
            )
            .catch(
                error => {
                    commit('setLoading', false)
                    commit('setError', error)
                    // console.log(error)
                }
            )
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})
