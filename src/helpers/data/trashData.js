import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getTrashByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/trash.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const trashItemsOnFirebase = response.data;
      const trashArray = [];
      if (trashItemsOnFirebase) {
        Object.keys(trashItemsOnFirebase).forEach((fbId) => {
          trashItemsOnFirebase[fbId].id = fbId;
          trashArray.push(trashItemsOnFirebase[fbId]);
        });
      }
      resolve(trashArray);
    })
    .catch((err) => reject(err));
});

export default { getTrashByUid };
