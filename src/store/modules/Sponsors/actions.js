import firebase from "firebase";

const setList = ({ commit }) => {
    const list = []
    commit("Application/SET_LOADING", true, { root: true });
    const ref = firebase.firestore().collection('sponsors')
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            list.push({
                name: doc.data().name,
                image: doc.data().image
            });
        });        
        commit("SET_LIST", { list });
        commit("Application/SET_LOADING", false, { root: true });
    });  
}

export default {
    setList
}