import firebase from 'firebase';

const getPalestrantes = () => {
  const palestrantes = [];
  const db = firebase.firestore();
  const palestrantesCollection = db.collection('palestrantes').orderBy("nome");
  palestrantesCollection.get()
    .then( snapshot => {
      snapshot.forEach(doc => {
        palestrantes.push({
          nome: doc.data().nome,
          imagem: doc.data().imagem,
          biografia: doc.data().biografia,
        });
      });
    });

    return palestrantes;
}

export default {
  getPalestrantes,
};
