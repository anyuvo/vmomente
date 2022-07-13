import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fc8a5ea0-fac7-459b-a425-b54fb229a7b3"
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

type MeResponseType = {
    data: {
        id: number,
        email: string,
        login: string
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    },
    resultCode: ResultCodesEnum,
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`)
            .then(response => response.data);
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}