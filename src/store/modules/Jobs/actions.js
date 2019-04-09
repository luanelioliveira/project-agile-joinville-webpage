import JobsService from "@/services/JobsService";

const getAllJobs = ({ commit }) => {
    let jobs = []
    commit("SET_JOBS", null );
    JobsService.getAllJobs(results => {
        jobs = results;
        commit("SET_JOBS", jobs );
    });
}

const getTop3Jobs = ({ commit }) => {
    let jobs = []
    commit("SET_JOBS", null );
    JobsService.getAllJobs(results => {
        jobs = results.splice(0,3);
        commit("SET_JOBS", jobs );
    });
}

export default {
    getAllJobs,
    getTop3Jobs
}