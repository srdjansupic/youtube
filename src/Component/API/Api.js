import axios from "axios";
const KEY = "AIzaSyDRTvqanuoTJ_FqZaB9CZKnLculBpPDoKI";

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        part:"snippet",
        maxResults: 7,
        key: KEY
    }
})