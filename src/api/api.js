import axios from "axios"
import qs from "qs"
export const IP="http://127.0.0.1:80"

export function loginapi(acc,pwd){
    return axios.post(IP+"/login.php", qs.stringify({acc, pwd}));
}

// 猜你喜欢请求接口
export function getList(){
    return axios.get(IP+"/gethouselist.php");
}
// 请求验证码
export function getCode(){
    return axios.get(IP+"/valitecode.php");
}

// 注册
export function regCheck(acc,pwd){
    return axios.post(IP+"/reg.php",qs.stringify({acc, pwd}));
}
