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

const getSingleTrash = (trashId) => axios.get(`${baseUrl}/trash/${trashId}.json`);

const deleteTrash = (trashId) => axios.delete(`${baseUrl}/trash/${trashId}.json`);

const postNewTrash = (newTrashItem) => axios.post(`${baseUrl}/trash.json`, newTrashItem);

const putTrash = (trashId, updatedTrashItem) => axios.put(`${baseUrl}/trash/${trashId}.json`, updatedTrashItem);

const getTrashFacts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/facts.json`)
    .then((response) => {
      const trashFactsFromFirebase = response.data;
      const factArray = [];
      if (trashFactsFromFirebase) {
        Object.keys(trashFactsFromFirebase).forEach((fbId) => {
          trashFactsFromFirebase[fbId].id = fbId;
          factArray.push(trashFactsFromFirebase[fbId]);
        });
      }
      resolve(factArray);
    })
    .catch((err) => reject(err));
});

const getMaterialTypes = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/material.json`)
    .then((response) => {
      const materialsFromFirebase = response.data;
      const materialId = [];
      if (materialsFromFirebase) {
        Object.keys(materialsFromFirebase).forEach((fbId) => {
          materialsFromFirebase[fbId].id = fbId;
          materialId.push(materialsFromFirebase[fbId]);
        });
      }
      resolve(materialId);
    })
    .catch((err) => reject(err));
});

export default {
  getTrashByUid,
  getSingleTrash,
  deleteTrash,
  postNewTrash,
  putTrash,
  getTrashFacts,
  getMaterialTypes,
};
