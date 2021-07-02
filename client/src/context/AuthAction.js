export const LoginStart = (user) => ({
    type: "LOGIN_START"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user

})

export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
})

export const LogoutSuccess = (user) => ({
    type: "LOGOUT_SUCCESS",
    payload: user
})

export const LogoutFailure = (error) => ({
    type: "LOGOUT_FAILURE",
    payload: error
})