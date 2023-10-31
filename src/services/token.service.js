const getLocalRefreshToken = () =>{
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken; // ?. = เพื่อให้โค๊ดรันได้ต่อโดยโปรเเกรมไม่หยุด ต่อให้ user จะหาไม่เจอ
}

const getLocalAccessToken = () =>{
     const user = JSON.parse(localStorage.getItem("user"));
     return user?.accessToken;
}

const setLocalAccessToken = (token) =>{
    const user = JSON.parse(localStorage.getItem("user"));
     user.accessToken =  token;
     localStorage.setItem('user', JSON.stringify(user));
}

const getUser = () =>{
   return JSON.parse(localStorage.getItem("user"));
};
const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};
const removeUser = () => {
    localStorage.removeItem("user")
};
const Tokenservice = {
    getLocalRefreshToken,
    getLocalAccessToken,
    setLocalAccessToken,
    getUser,
    setUser,
    removeUser,
}
export default Tokenservice;