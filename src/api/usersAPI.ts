import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fc8a5ea0-fac7-459b-a425-b54fb229a7b3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}