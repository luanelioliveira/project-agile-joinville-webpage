import firebase from "firebase";

const getSponsors = ({ commit }) => {
    const sponsors = []
    const ref = firebase.firestore().collection('sponsors')
    ref.onSnapshot((snapshot) => {        
        snapshot.forEach((doc) => {
            sponsors.push({
                name: doc.data().name,
                image: doc.data().image
            });
        });        
        commit("setSponsors", sponsors);
    });  
}

export default {
    getSponsors
}