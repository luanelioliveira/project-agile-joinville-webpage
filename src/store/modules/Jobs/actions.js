import firebase from "firebase";

const setList = ({ commit }) => {
    const list = []
    commit("Application/SET_LOADING", true, { root: true });
    const ref = firebase.firestore().collection('jobs')
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            let date = doc.data().datePublished.toDate()
            list.push({
                id: doc.id,
                company: doc.data().company,
                contact: doc.data().contact,
                description: doc.data().description,
                role: doc.data().role,
                datePublished: date.toLocaleString("pt-BR", {day: '2-digit', month:'2-digit', year:'numeric'})
            });
        });        
        commit("SET_LIST", { list });
        commit("Application/SET_LOADING", false, { root: true });
    });  
}

const setListTop3 = ({ commit }) => {
    const list = []
    commit("Application/SET_LOADING", true, { root: true });
    const ref = firebase.firestore().collection('jobs').orderBy('datePublished', 'desc').limit(3);
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            let date = doc.data().datePublished.toDate()
            list.push({
                id: doc.id,
                company: doc.data().company,
                contact: doc.data().contact,
                description: doc.data().description,
                role: doc.data().role,
                datePublished: date.toLocaleString("pt-BR", {day: '2-digit', month:'2-digit', year:'numeric'})
            });
        });        
        commit("SET_LIST", { list });
        commit("Application/SET_LOADING", false, { root: true });
    });  
}

export default {
    setList,
    setListTop3
}