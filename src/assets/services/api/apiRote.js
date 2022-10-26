import axios from "axios";
import {api} from "./apiConfig";
import {getTimeBase, getUserIp} from "../../redux/counterSlice";

export const getIp = (dispatch) => {
    axios.get(api.geolocationDb.curl)
        .then(res => {
            dispatch(getUserIp(res.data))
        })
        .catch(error => console.log(error))
}

export function getGeolocation(ip) {
    axios.get(api.ipGeolocation.curl  + ip, {
        headers: {
            'apikey': api.ipGeolocation.key
        }}).then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}

export function getQuotes(setState) {
    axios.get(api.programmingCotes.curlRandomQuotes, {
        headers: {
            "accept": "application/json"
        }})
        .then(response => {
            setState(response.data)
        }).catch(error => console.log(error))
}

export function getWorldTime(ip, dispatch) {
    axios.get(api.worldTime.curlIp + ip).then(response => {

        dispatch(getTimeBase(response.data))
    }).catch(error => console.log(error))
}

