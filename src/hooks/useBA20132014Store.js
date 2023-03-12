import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

import { addDoc, collection, serverTimestamp, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';

import { db, storage } from '../firebase'
import { deleteObject, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const BA20132014Store = (set, get) => ({
    figures: [],
    reset: () => set({ figures: [] }),
    setFigures: (data) => set({ figures: data }),
    addFigure: async(newFigure, currentFile) => {
        try {
            let fileUrl, fileRefName;
            if (currentFile) {
                fileRefName = `users/${uuidv4()}-${currentFile.name}`;
                const imageRef = ref(storage, fileRefName);

                const fileUpload = await uploadBytes(imageRef, currentFile);
                fileUrl = await getDownloadURL(fileUpload.ref);
                console.log('UPLOADED');
            }

            console.log(newFigure);

            await addDoc(collection(db, 'BA20132014'), {
                ...newFigure,
                photoRef: fileRefName || '',
                photoUrl: fileUrl || '',
                timestamp: serverTimestamp()
            });

            console.log('NEW DOCUMENT CREATED');
        } catch (err) {
            console.log('addFigureError:', err);
        }
    },
    updateFigure: () => {},
    deleteFigure: () => {},
});

export const useBA20132014Store = create(BA20132014Store);