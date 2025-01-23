import { Client } from '@stomp/stompjs';
import { useState } from 'react';
const { default: getConfig } = require("next/config");

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export function useStompClient (topicToSubscribe, onMessageReceived) {
    const [webSocketConnectionRetryCount, setWebSocketConnectionRetryCount] = useState(0)
    
    const stompClient = new Client({
        brokerURL: `${publicRuntimeConfig.wsUrl}/chat`,
    })

    const connect = () => stompClient.activate();
    const disconnect = () => stompClient.deactivate();
    const isRetryThresholdReached = () => webSocketConnectionRetryCount >= 3

    stompClient.onConnect = (frame) => {
        stompClient.subscribe(topicToSubscribe, (greeting) => {
            onMessageReceived(greeting.body)
        });
    };

    stompClient.onWebSocketError = (error) => {
        if (isRetryThresholdReached()) {
            console.log(webSocketConnectionRetryCount)
            disconnect();
        } else {
            console.log("increasing retry count from " + webSocketConnectionRetryCount)
            setWebSocketConnectionRetryCount(webSocketConnectionRetryCount+1);    
        }
    }

    stompClient.onStompError = (frame) => {
        console.error('Broker reported error: ' + frame.headers['message']);
        console.error('Additional details: ' + frame.body);
    };

    return {stompClient, connectStompClient: connect, disconnectStompClient: disconnect};
} 

