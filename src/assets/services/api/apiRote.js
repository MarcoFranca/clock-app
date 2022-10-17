import axios from "axios";
import {api} from "./apiConfig";

export const getIp = (setState) => {
    axios.get(api.geolocationDb.curl)
        .then(res => {
            console.log(res.data)
            setState(res.data.IPv4)
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
            console.log(response.data)
        }).catch(error => console.log(error))
}

export function getWorldTime(ip) {
    axios.get(api.worldTime.curlIp + ip).then(response => {
        console.log(response.data)
    }).catch(error => console.log(error))
}

