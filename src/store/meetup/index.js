import * as firebase from 'firebase'

export default {
    state: {
        loadedMeetups: [
            { imageUrl: 'https://cnet1.cbsistatic.com/img/t0zSAQE-tnW5MbFnaYVjumgafvw=/936x527/2009/11/25/a732b5d0-f0fd-11e2-8c7c-d4ae52e62bcc/noisebridge8.jpg', id: 'dzzsds', title: 'Meetup in Noisebridge', date: new Date(), location: 'CA', description: 'bra bra' },
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Contest_area_Def_Con_24.agr.jpg', id: '5ww3rw', title: 'Meetup in DEF CON', date: new Date(), location: 'NY', description: 'bra bra' },
            { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Maker_Faire_2008_spinning_lights.jpg', id: 't6ur5y', title: 'Meetup in Maker Faire', date: new Date(), location: 'TH', description: 'bra bra' }
        ]
    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        updateMeetup (state, payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if (payload.title) {
                meetup.title = payload.title
            }
            if (payload.description) {
                meetup.description = payload.description
            }
            if (payload.date) {
                meetup.date = payload.date
            }
        }
    },
    actions: {
        loadMeetup ({commit}) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
                .then((data) => {
                    const meetups = []
                    const obj = data.val()
                    for (let key in obj) {
                        meetups.push({
                            id: key,
                            creatorId: obj[key].creatorId,
                            title: obj[key].title,
                            location: obj[key].location,
                            description: obj[key].description,
                            imageUrl: obj[key].imageUrl,
                            date: obj[key].date
                        })
                    }
                    commit('setLoadedMeetups', meetups)
                    commit('setLoading', false)
                })
                .catch((error) => {
                    console.log(error)
                    commit('setLoading', true)
                    setTimeout(() => {
                        commit('setLoading', false)
                    }, 2000)
                })
        },
        createMeetup ({commit, getters}, payload) {
            const meetup = {
                creatorId: getters.user.id,
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date
            }
            let imageUrl
            let key
            firebase.database().ref('meetups').push(meetup)
                .then((data) => {
                    console.log(data)
                    key = data.key
                    return key
                })
                .then((key) => {
                    const filename = payload.image.name
                    const ext = filename.slice(filename.lastIndexOf('.'))
                    return firebase.storage().ref('meetups/' + key + ext).put(payload.image)
                })
                .then((fileData) => {
                    imageUrl = fileData.metadata.downloadURLs[0]
                    return firebase.database().ref('meetups').child(key).update({ imageUrl: imageUrl })
                })
                .then(() => {
                    commit('createMeetup', {
                        id: key,
                        ...meetup,
                        imageUrl: imageUrl

                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        updateMeetupData ({commit}, payload) {
            commit('setLoading', true)
            const updateObj = {}
            if (payload.title) {
                updateObj.title = payload.title
            }
            if (payload.description) {
                updateObj.description = payload.description
            }
            if (payload.date) {
                updateObj.date = payload.date
            }
            firebase.database().ref('meetups').child(payload.id).update(updateObj)
                .then(() => {
                    commit('setLoading', false)
                    commit('updateMeetup', payload)
                }).catch(error => {
                    console.log(error)
                    commit('setLoading', false)
                })
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
        }
    }
}
