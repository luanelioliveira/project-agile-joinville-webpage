
const clearError = ({commit}) => {
    commit("SET_ERROR", null)
};

const setError = ({commit}, payload) => {
    commit("SET_ERROR", payload)
};

export default {
    clearError,
    setError,
}

  