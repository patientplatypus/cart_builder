import axios from 'axios';

export default {
    getVideos: function(){
        return axios.get('http://localhost:5000/videos');
    },
    pushVideo: function(){
        return axios.push('http://localhost:5000/videos/' + tubeID )
    }
}