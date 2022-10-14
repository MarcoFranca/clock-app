
# APIS
[![React](https://img.shields.io/badge/-API-yellow)](http://worldtimeapi.org/)
## API - World Time
[![React](https://img.shields.io/badge/API-World%20Time%20API-yellow)](http://worldtimeapi.org/)

**Set the time based on the visitor's IP adress. This API will also be used for additional data, like the day of the year shown in the expanded state.**

## Usage Examples:

* ### Request a list of valid timezones (_as JSON_):

<div style="color: rgb(255, 255, 255); background-color: #c7954e; max-width: 350px; border-radius: 4px; font-weight: 500">
 <span style="padding-left: 5px">CURL Base = </span> http://worldtimeapi.org/api/timezone
</div>

___

* ### Request a list of valid locations for an area (as JSON):

````javascript
curl_example: "http://worldtimeapi.org/api/timezone/:area"
curl: "http://worldtimeapi.org/api/timezone/Europe"
````

___

* ### Request the current time for a timezone with region:

````javascript
curl_example: "http://worldtimeapi.org/api/timezone/:area/:location[/:region]"
curl: "http://worldtimeapi.org/api/timezone/America/Argentina/Salta"
````

> **Note**: By default, API responses are in JSON format nohighlight.
> Adding a suffix of **`.txt`** to any `API URL` will return a `plain-text`
> response which may be easier to parse on some systems.

`curl:"http://worldtimeapi.org/api/timezone/Europe/London.txt"`

___

* ### Request the current time based on your public IP (as JSON):

`curl_example: "http://worldtimeapi.org/api/ip"`

**_Request the current time for a specific IP (in plain text):_**

````javascript
curl_example: "http://worldtimeapi.org/api/ip/:ipv4"
curl: "http://worldtimeapi.org/api/ip/8.8.8.8.txt"
````

***

## API - IP Geolocation 
[![React](https://img.shields.io/badge/API-IP%20Geolocation%20API-yellow)](https://freegeoip.app/)

**Set the city and country underneath the time.**

## Authentication methods:

> **Note**: **__To authorize, you can use the following ways:__**

* ### GET query parameter:

You can pass your `API key` along with every request by adding it as a query parameter `apikey`.

`curl: "https://api.ipbase.com/v2/info?ip=1.1.1.1&apikey=YOUR-APIKEY"`
> **Warning**: This method could expose your API key in access logs and such.
> Sending the API key via a header parameter as specified below circumvents this
> problem.

> **Note**: you can set a request header with the name apikey

````javascript
axios.get(("https://api.ipbase.com/v2/info?ip=1.1.1.1"), {
  headers: {
    "apikey": "YOUR-APIKEY"
  }}).then(response => {
  setExample(response.data)
})
        .catch(error => console.log(error))
````

___

## Error Codes:

* ### 401

>Warning: **Invalid authentication credentials**

* ### 403

>Warning: **You are not allowed to use this endpoint, please upgrade your plan (opens new window).**

* ### 404

>Warning: **A requested endpoint does not exist**

* ### 422

>Warning: **Validation error, please check the list of validation errors: here**

* ### 429

>Warning: **You have hit your rate limit or your monthly limit. For more requests please upgrade your plan (opens new window).**

* ### 500

>Warning: **Internal Server Error - let us know: support@ipbase.com**

## Validation errors

* ### Invalid Ip

>Note: **The ip must be a valid IP address** 
* ### Missing ip

>Note: **The ip parameter is required** 
* ### Invalid language

>Note: **The selected language is invalid Should be an ISO Alpha 2 Language Code for localising the ip data**

## **Rate limit and quotas**

You can use a certain number of requests per month, defined by your plan. Once you go over this quota, the API returns
a `429` HTTP status code, and you either need to upgrade your plan or wait until the end of the month.

We enforce a minute rate limit for specific plans. If you exceed this, the API returns a `429` HTTP status code. You then have to wait until the end of the minute to make more requests. Not every request counts

>Note: Not every request counts
> 
>Only successful calls count against your quota. Any error on our side or validation errors (e.g., wrong parameter) will NOT count against your quota or rate limit.

## **Response Headers**

**We attach specific headers to tell you your current monthly/minute quota and how much you have remaining in the period.**

```bash
X-RateLimit-Limit-Quota-Minute: 10

X-RateLimit-Limit-Quota-Month: 300

X-RateLimit-Remaining-Quota-Minute: 5

X-RateLimit-Remaining-Quota-Month: 199
```

- [Programming Quotes API](https://programming-quotes-api.herokuapp.com/) to generate random programming quotes.
  - If the Programming Quotes API doesn't work, [here's a good alternative quote API](https://github.com/lukePeavey/quotable) you can use instead. It's not programming specific, but it will do the trick.
