import SponsorsService from "@/services/SponsorsService";

const getSponsors = ({ commit }) => {
    let sponsors = []
    SponsorsService.getAllSponsors(results => {
        sponsors = results;
        commit("setSponsors", sponsors );
    });  
}

export default {
    getSponsors
}