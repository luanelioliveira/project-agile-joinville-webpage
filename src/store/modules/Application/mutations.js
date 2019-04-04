

const SET_LOADING = (state, loading) => {
    state.loading = loading;
};

const SET_ERROR = (state, error) => {
    state.error = error;
};
export default {
    SET_ERROR,
    SET_LOADING,
}
