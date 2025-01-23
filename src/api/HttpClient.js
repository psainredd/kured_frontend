import axios from "axios";

export const axiosInstance = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    withCredentials: true
})

export const postRequest = (url, data, onSuccess, onAuthFailure, onRequestFailure) => {
    const onSuccessfulResponse = (responseData) => {
        try {
            onSuccess(responseData)
        } catch (e) {
            onRequestFailure()
        }
    }

    axiosInstance.post(url, data).
        then((response) => {
            onSuccessfulResponse(response.data)
        }).catch((error)=> {
            if (error.response && (error.response.status == 401 || error.response.status == 403)) {
                onAuthFailure()
            } else {
                onRequestFailure()
            }
          })
}

export const getRequest = (url, onSuccess, onAuthFailure, onRequestFailure) => {
    const onSuccessfulResponse = (responseData) => {
        try {
            onSuccess(responseData)
        } catch (e) {
            onRequestFailure()
        }
    }

    axiosInstance.get(url).then((response) => {
            onSuccessfulResponse(response.data)
        }).catch((error)=> {
            console.log(error)
            if (error.response && (error.response.status == 401 || error.response.status == 403)) {
                onAuthFailure()
            } else {
                onRequestFailure()
            }
          })
}