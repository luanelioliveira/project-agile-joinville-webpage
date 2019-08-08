import firebase from 'firebase';

const get = async (collection, orderBy) => {
  let data = [];
  const db = firebase.firestore();
  const palestrantesCollection = db.collection(collection).orderBy(orderBy);
  await palestrantesCollection.get()
    .then( snapshot => {
      data = snapshot;
    });
  return data;
}

export default {
  get,
};
