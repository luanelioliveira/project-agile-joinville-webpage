import firebase from "firebase";

const getJobs = ({ commit }) => {
    let jobs = []
    commit("SET_JOBS", null );
    commit("Application/SET_LOADING", true, { root: true });
    const ref = firebase.firestore().collection('jobs')
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            let date = doc.data().datePublished.toDate()
            jobs.push({
                id: doc.id,
                company: doc.data().company,
                contact: doc.data().contact,
                description: doc.data().description,
                role: doc.data().role,
                datePublished: date.toLocaleString("pt-BR", {day: '2-digit', month:'2-digit', year:'numeric'})
            });
        });
        commit("SET_JOBS", jobs );
        commit("Application/SET_LOADING", false, { root: true });
    });
}

const getJobsTop3 = ({ commit }) => {
    let jobs = []
    commit("SET_JOBS", null );
    commit("Application/SET_LOADING", true, { root: true });
    const ref = firebase.firestore().collection('jobs').orderBy('datePublished', 'desc').limit(3);
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            let date = doc.data().datePublished.toDate()
            jobs.push({
                id: doc.id,
                company: doc.data().company,
                contact: doc.data().contact,
                description: doc.data().description,
                role: doc.data().role,
                datePublished: date.toLocaleString("pt-BR", {day: '2-digit', month:'2-digit', year:'numeric'})
            });
        });    
        commit("SET_JOBS", jobs );
        commit("Application/SET_LOADING", false, { root: true });
    });  
}

export default {
    getJobs,
    getJobsTop3
}