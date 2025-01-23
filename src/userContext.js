import { useEffect, useState } from "react";
import { useContext } from "react";
import { getLoggedInUser } from "./api/Login";

const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: undefined,
    setLoggedInUser: undefined
})

Date.prototype.addSeconds = (seconds) => {
    this.setSeconds(this.get)
}

const userKey = "user"
const retryTimeStampKey = 'retryTimeStamp'

export const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [foundUserObject, setFoundUserObj] = useState(false);
    
    const onSuccess = (responseData) => {
        saveUserLocally(responseData, setLoggedInUser)
        setFoundUserObj(true)
    }

    const onAuthFailure = () => {
        saveUserLocally({})
        onFailure()
    }

    const onFailure = () => {
        setFoundUserObj(true)
        setLastRetryTimeStamp(Date.now())
    }

    const shouldSkipLoginRequest = () => {
        const lastRetryTimeStamp = getLastRetryTimeStamp()
        // Wait for atleast 5 minutes before retry
        return lastRetryTimeStamp || Date.now() < lastRetryTimeStamp + 5*60*100
    }
    // Look for user in session storage. If found and user is authenticated, 
    // update loggedInUser and reset the loading flag.
    useEffect(() => {
        // Step 1. Get user saved in session storage
        const savedUser = getSavedUser()
        
        // Step 2. If found a user in session storage
        if (savedUser) {
            /*  2.1. Reset the loading flag as we don't need to make a remote call to fetch user again.
                     This is because, user is saved in session storage in 3 scenarios:
                        1. Fetched user from remote successfully and saved to session storage.
                        2. User is not logged in and get_user from remote failed, in which case 
                            we store a dummy user object in session storage.
                        3. User logged in successfully in current session and logged in user.
            */
            setFoundUserObj(true)
            // Step 2.2 If saved user is authenticated and loggedInUser is not set, update loggedInUser
            if (!loggedInUser && isUserAuthenticated(savedUser)) {
              setLoggedInUser(savedUser)
            }
        } else {

            if (shouldSkipLoginRequest()) {
                setFoundUserObj(true)
            } else {
                getLoggedInUser(onSuccess, onAuthFailure, onFailure)
            }
        }
    },[])

    return (
        <UserContext.Provider value = {{loggedInUser, setLoggedInUser, gotUserFromRemote: foundUserObject}}>
            {children}
        </UserContext.Provider>
    )
}

const setLastRetryTimeStamp = (timeStamp) => {
    sessionStorage.setItem(retryTimeStampKey, timeStamp)
}

const getLastRetryTimeStamp = () => sessionStorage.getItem(retryTimeStampKey)

export const useUserContext = () => useContext(UserContext)

export const saveUserLocally = (user, setLoggedInUser) => {
    if (user) {
        user = {...user, sessionStartTime: Date.now()}
        sessionStorage.setItem(userKey, JSON.stringify(user))
        if (isUserAuthenticated(user)) {
            setLoggedInUser(user)
        }
    }
}

export const getSavedLoggedInUser = () => {
    const user = getSavedUser() ?? {}
    return isUserAuthenticated(user) ? user : null
}

export const getSavedUser = () => {
    const storedValue = sessionStorage.getItem(userKey)
    return JSON.parse(storedValue)
}

export const saveUserMobileNumber = (mobileNumber) => {
    var user = getSavedUser() ?? {}
    
    if (!isUserAuthenticated(user)) {
        user.mobileNumber = mobileNumber
        saveUserLocally(user, setLoggedInUser)
    }
}

export const savefqUserName = (fqUserName) => {
    var user = getSavedUser() ?? {}
    
    if (!isUserAuthenticated(user)) {
        user.fqUserName = fqUserName
        saveUserLocally(user, setLoggedInUser)
    }
}

export const logoutUser = (setLoggedInUser) => {
    setLoggedInUser(null)
    sessionStorage.removeItem(userKey)
}

export const getUserFQUserName = (user) => {
    return (user ?? {}).fqUserName
}

export const getUserMobileNumber = (user) => {
    return (user ?? {}).mobileNumber
}

export const getUserFirstName = (user) => {
    return (user ?? {}).firstName
}

export const getUserLastName = (user) => {
    return (user ?? {}).lastName
}

export const getUserFacilityId = (user) => {
    return (user ?? {}).facilityId
}

export const getUserUserName = (user) => {
    return (user ?? {}).userName
}

export const isUserAuthenticated = (user) => {
    return (user ?? {}).isAuthenticated
}

export const isMFAEnabled = (request) => {
    return (request ?? {}).isMultiFactorAuthenticationEnabled
}

export const getUserAccountBal = (user) => {
    return (user??{}).accountBal
}

export const getUserInitials = (user) => {
    var result = '';
    const firstName = (user ?? {}).firstName
    const lastName = (user ?? {}).lastName
    if (firstName && firstName.length > 0) {
        result = firstName.charAt(0)
    }
    if (lastName && lastName.length > 0) {
        result = result + lastName.charAt(0)
    }
    return result.toUpperCase();
}

export const getSessionStartTime = (user) => user?.sessionStartTime