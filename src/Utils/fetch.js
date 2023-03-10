import {serverRoutes} from './const';

export const RegisterAPI = (username, password, fullName, email) =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Method", "POST");
    myHeaders.append("Access-Control-Request-Headers", "Content-Type");
    var raw = JSON.stringify({
    "username": username,
    "password": password,
    "fullName": fullName,
    "email": email,
    });
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };
    return fetch(serverRoutes.Register, requestOptions)
}