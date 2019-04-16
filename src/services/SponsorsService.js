import firebase from "firebase";

export default {
  getAllSponsors: (callback) => {
    let sponsors = []
    const ref = firebase.firestore().collection('sponsors');
    
    ref.onSnapshot((snapshot) => {  
      snapshot.forEach((doc) => {
        sponsors.push({
            name: doc.data().name,
            image: doc.data().image
        });
      });
      if (callback) {
        callback(sponsors);
      }
    });    
  }
}