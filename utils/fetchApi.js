import axios from "axios";

export const holBaseUrl = 'https://booking-com.p.rapidapi.com';

export const holFetchApi = async (url) => {
    let data = null;
    await fetch(url, {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
            'X-RapidAPI-Key': '3bed496a49mshc772c975e0132e3p15fd27jsn86749bcd2c35'
        },
    }).then(response => response.json())
	.then(response => {
        data = response
    })
	.catch(err => console.error(err));
      
    return data;
}