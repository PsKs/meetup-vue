import moment from 'moment'

export default (value) => {
    return moment(value).format('dddd Do, MMM YYYY h:mm A')
}
