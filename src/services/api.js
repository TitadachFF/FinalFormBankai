import axios from "axios";
const BASE_URL =
    import.meta.env.VITE_BASE_URL;
const USERNAME =
    import.meta.env.VITE_BASE_USERNAME;
const PASSWORD =
    import.meta.env.VITE_BASE_PASSWORD;
import Tokenservice from "./token.service";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    },
    auth: {
        username: USERNAME,
        password: PASSWORD
    }
});
//Add Interceptor to request object
instance.interceptors.request.use((config) => {
        const token = Tokenservice.getLocalAccessToken();
        if (token) {
            config.headers["x-access-token"] = token;
        }
        return config;

    },
    (error) => {
        return Promise.reject(error);

    }
);
//Add interceptor to reponse object
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== "/api/auth/signin" && err.response) {
            if (err.response.status === 401 && originalConfig._retry) {
                originalCofig,
                _retry = true;
                try {
                    const rs = await instance.post("/api/auth/refreshtoken", {
                        refreshToken: Tokenservice.getLocalRefreshToken()
                    })
                    const {
                        accessToken
                    } = rs.data;
                    Tokenservice.setLocalAccessToken(accessToken);
                    return instance(originalConfig)
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }
        return Promise.reject(err); 
    }
);
export default instance;