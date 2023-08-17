import axios from 'axios';

const BASE_URL = 'https://youtube138.p.rapidapi.com';

// process.env.REACT_APP_YOUTUBE_API_KEY || "YOUR_API_KEY"
// 'a0b8af719cmshce42c34dbbc4e2dp1f3442jsn4ae258d1b48c'

const options = {
    
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': 'a0b8af719cmshce42c34dbbc4e2dp1f3442jsn4ae258d1b48c',
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromApi = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}