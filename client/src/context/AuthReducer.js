const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                sessid: null,
                isFetching: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                sessid: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGIN_FAILURE":
            return {
                sessid: null,
                isFetching: false,
                error: action.payload
            }
        case "LOGOUT_SUCCESS":
            return {
                sessid: action.payload,
                isFetching: false,
                error: false
            }
        case "LOGOUT_FAILURE":
            return {
                sessid: null,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;