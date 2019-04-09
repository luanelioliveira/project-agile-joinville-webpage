import firebase from "firebase";

export default {
  getAllJobs: (callback) => {
    let jobs = []
    const ref = firebase.firestore().collection('jobs').orderBy('datePublished', 'desc');
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
      if (callback) {
        callback(jobs);
      }
    });    
  }
}