import axios from 'axios';

export default {
    getVideos: function(){
        return axios.get('/api/videos');
    },
    pushVideo: function(){
        return axios.push('/api/videos/' + tubeID )
    }
}