import JobsService from "@/services/JobsService";

const getAllJobs = ({ commit }) => {
    let jobs = []
    commit("clearJobs");
    JobsService.getAllJobs(results => {
        jobs = results;
        commit("setJobs", jobs );
    });
}

const getTop3Jobs = ({ commit }) => {
    let jobs = []
    commit("clearJobs" );
    JobsService.getAllJobs(results => {
        jobs = results.splice(0,3);
        commit("setJobs", jobs );
    });
}

export default {
    getAllJobs,
    getTop3Jobs
}