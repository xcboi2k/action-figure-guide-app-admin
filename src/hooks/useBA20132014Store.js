import { db } from '../firebase';

import {collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, orderBy} from 'firebase/firestore';

const BA20132014Ref = collection(db, "BA20132014");
const sortedBA20132014Ref = query(BA20132014Ref, orderBy('figure_number'));
class useBA20132014Store {
    addBA20132014 = (newBA20132014) => {
        return addDoc(BA20132014Ref, newBA20132014);
    };

    updateBA20132014 = (id, updatedBA20132014) => {
        const docRef = doc(db, "BA20132014", id);
        return updateDoc(docRef, updatedBA20132014);
    };

    deleteBA20132014 = (id) => {
        const docRef = doc(db, "BA20132014", id);
        return deleteDoc(docRef);
    };

    getAllBA20132014 = () => {
        return getDocs(sortedBA20132014Ref);
    };

    getBA20132014 = (id) => {
        const docRef = doc(db, "BA20132014", id);
        return getDoc(docRef);
    }
}

export default new useBA20132014Store();