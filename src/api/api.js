import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fc8a5ea0-fac7-459b-a425-b54fb229a7b3"
    }
});

export const getUsers = (currentPage = 1, pageSize = 4) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {
            withCredentials: true
        })
        .then(response => response.data)
}