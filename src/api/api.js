import axios from 'axios';

const KEY = 'AIzaSyDC7urS0EU5uu2J3sYqDPz1QOlQP6zDZ3I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    params: {
        part: 'snippet',
        key: KEY,
    },
});
