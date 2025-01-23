import getConfig from "next/config"
import { getRequest } from "./HttpClient"

const { publicRuntimeConfig } = getConfig()

const getNotificationsURL = `${publicRuntimeConfig.apiUrl}/get_notifications`

export const getNotificationType = (notification) => {
    return notification?.notificationType
}

export const isInfoNotification = (notification) => {
    var notificationType = getNotificationType(notification)
    return  "INFO" == notificationType
}

export const isAlertNotification = (notification) => {
    var notificationType = getNotificationType(notification)
    return  "ALERT" == notificationType
}

export const isErrorNotification = (notification) => {
    var notificationType = getNotificationType(notification)
    return  "ERROR" == notificationType
}

export function getNotifications (onSuccess, onAuthFailure, onRequestFailure) {
    getRequest(getNotificationsURL, onSuccess, onAuthFailure, onRequestFailure)
}