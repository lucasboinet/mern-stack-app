export const LoginStart = (sessid) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (sessid) => ({
    type: "LOGIN_SUCCESS",
    payload: sessid

})

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})

export const LogoutSuccess = (sessid) => ({
    type: "LOGOUT_SUCCESS",
    payload: sessid
})

export const LogoutFailure = (error) => ({
    type: "LOGOUT_FAILURE",
    payload: error
})