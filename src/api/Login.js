import getConfig from "next/config";
import { getRequest, postRequest } from "./HttpClient";

const { publicRuntimeConfig } = getConfig()

const loginUrl = `${publicRuntimeConfig.apiUrl}/login`
const sendOtpUrl = `${publicRuntimeConfig.apiUrl}/send_otp`
const verifyOtpUrl = `${publicRuntimeConfig.apiUrl}/verify_otp`
const forgotPasswordUrl = `${publicRuntimeConfig.apiUrl}/forgot_pwd`
const forgotUsernameUrl = `${publicRuntimeConfig.apiUrl}/forgot_username`
const loggedInUserUrl = `${publicRuntimeConfig.apiUrl}/get_user`
const validateForgotUNameReqUrl = `${publicRuntimeConfig.apiUrl}/validate_forgot_username_req`
const validateForgotPwdReqUrl = `${publicRuntimeConfig.apiUrl}/validate_forgot_password_req`
const resetPwdUrl = `${publicRuntimeConfig.apiUrl}/reset_pwd`
const logoutUrl = `${publicRuntimeConfig.apiUrl}/logout`

const userNameParam = "fqUserName"
const rememberMeParamName = "remember-me"
const passwordParamName ='password'
const otpParamName = 'otp'
const mobileNumberParam = 'mobileNumber'

export const fqUserName = (username) => {
    let fqUserName = username ?? "";
    const delimiter = '.'
    const host = window.location.host;
    let subDomain = null;

    if (host.split(delimiter).length == 3) {
        subDomain = host.split(delimiter)[0] === "www" ? null : host.split(delimiter)[0]
    }

    if (fqUserName.split(delimiter).length == 2) {
        return fqUserName;
    } else if(subDomain) {
        return subDomain + delimiter + fqUserName
    } 
    
    return username;
}

export function logIntoKured(username, password, rememberMe = false, onSuccessfulLogin, onAuthFailure, onRequestFailure) {
    const data = new FormData();
    data.append(userNameParam, fqUserName(username));
    data.append(passwordParamName, password);
    data.append(rememberMeParamName, rememberMe);
    
    postRequest(loginUrl, data, onSuccessfulLogin, onAuthFailure, onRequestFailure)
}

export function verifyOTP (username, otp, rememberMe = false, onSuccessfulLogin, onAuthFailure, onRequestFailure) {
    const data = new FormData();
    data.append(userNameParam, fqUserName(username));
    data.append(otpParamName, otp);
    data.append(rememberMeParamName, rememberMe);
    
    postRequest(verifyOtpUrl, data, onSuccessfulLogin, onAuthFailure, onRequestFailure)
}

export function resendOTPForMFA (username, onSuccess, onRequestFailure) {
    const url =`${sendOtpUrl}?${userNameParam}=${fqUserName(username)}`
    getRequest(url, onSuccess, onRequestFailure, onRequestFailure)
}

export function forgotUsername (mobileNumber, onSuccess, onRequestFailure) {
    const data = new FormData();
    data.append(mobileNumberParam, mobileNumber)

    postRequest(forgotUsernameUrl, data, onSuccess, onRequestFailure, onRequestFailure)
}

export function forgotPassword (username, onSuccess, onRequestFailure) {
    const data = new FormData();
    data.append(userNameParam, fqUserName(username))

    postRequest(forgotPasswordUrl, data, onSuccess, onRequestFailure, onRequestFailure)
}

export function getLoggedInUser (onSuccess, onAuthFailure, onFailure) {
    getRequest(loggedInUserUrl, onSuccess, onAuthFailure, onFailure)
}

export function resetPwd (userName, password, onSuccess, onAuthFailure, onRequestFailure) {
    const data = new FormData();
    data.append(userNameParam, userName)
    data.append(passwordParamName, password)

    postRequest(resetPwdUrl, data, onSuccess, onAuthFailure, onRequestFailure)
}

export function verifyForgotUserNameOTP(mobileNumber, otp, onSuccess, onAuthFailure, onRequestFailure) {
    const data = new FormData();
    data.append(mobileNumberParam, mobileNumber)
    data.append(otpParamName, otp)
    
    postRequest(validateForgotUNameReqUrl, data, onSuccess, onAuthFailure, onRequestFailure)
}

export function verifyForgotPasswordOTP(mobileNumber, otp, onSuccess, onAuthFailure, onRequestFailure) {
    const data = new FormData();
    data.append(userNameParam, mobileNumber)
    data.append(otpParamName, otp)
    
    postRequest(validateForgotPwdReqUrl, data, onSuccess, onAuthFailure, onRequestFailure)
}

export function logout(onSuccess, onAuthFailure, onFailure) {
    getRequest(logoutUrl, onSuccess, onAuthFailure, onFailure)
}