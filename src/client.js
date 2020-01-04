import axios from "axios";
// import shortcut from "./components/Shortcuts";

let request = axios.create({
    baseURL: "https://api.anyshortcut.com",
    timeout: 3000,
    contentType: "application/json; charset=utf-8",
    withCredentials: true,
});


request.interceptors.response.use(response => {
    // eslint-disable-next-line no-console
    console.log(response);
    // HTTP status code
    if (response.status === 200) {
        // Response code
        let code = response.data.code;
        if (code !== 200) {
            return Promise.reject(response);
        }
        return response.data.data;
    } else {
        return Promise.reject(response);
    }
});

export default {
    async getUserInfo() {
        return request.get("/user/info");
    },
    getShortcuts() {
        return request.get("/shortcuts?type=primary&nested=false");
    },
    getCompound() {
        return request.get("/shortcuts?type=compound&nested=false");
    },

    // async getAccess() {
    //     return request.get("")
    // }
}