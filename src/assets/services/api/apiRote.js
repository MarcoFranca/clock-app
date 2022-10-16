import axios from "axios";
import {api} from "./apiConfig";

export function getIp() {
    axios.get(api.ipGeolocation.curl, {
        headers: {
            'apikey': api.ipGeolocation.key
        }}).then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}

export function getCotes() {
    axios.get(api.programmingCotes.curlRandomQuotes, {
        headers: {
            "accept": "application/json"
        }})
        .then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}

export function getGeolocation() {
    axios.get(api.ipGeolocation.url, {
        headers: {
            'apikey': api.ipGeolocation.key
        }}).then(response => {
        console.log(response)
    }).catch(error => console.log(error))
}

