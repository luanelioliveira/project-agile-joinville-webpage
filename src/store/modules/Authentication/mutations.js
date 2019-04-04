
const SET_CURRENT_USER = (state, user) => {
    state.currentUser = user;
};

const SET_AUTHENTICATED = (state, status) => {
    state.isAuthenticated = status;
}

export default {
    SET_AUTHENTICATED,
    SET_CURRENT_USER
}
  