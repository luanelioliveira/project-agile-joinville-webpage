const setJobs = (state, payload) => {
    state.jobs = payload;
};

const clearJobs = (state) => {
    state.jobs = null;
};

export default {
    setJobs,
    clearJobs
}