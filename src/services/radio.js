import "firebase/database";
import {
  doc,
  getFirestore,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../fb";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const audio = new Audio("http://mediaserv38.live-streams.nl:8027/live");
export const RadioService = {
  play: () => {
    audio.play();
  },
  pause: () => {
    audio.pause();
    // window.location.reload();
  },
  sendMessage: (data) => {
    return new Promise(async (resolve, reject) => {
      await addDoc(collection(db, "messages"), { ...data })
        .then((res) => {
          resolve(true);
        })
        .catch((err) => {
          reject(false);
        });
    });
  },
};
