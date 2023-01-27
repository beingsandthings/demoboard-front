import axios from 'axios';


export const AxiosApi = axios.create({
    baseURL:'http://localhost:8080',
})

export const getBoardList =()=> {
    return AxiosApi
        .get('/board')
        .then(res => {
            return res.data;
        })
        .catch(err => err)
}



