import { create } from 'zustand';

import { addDoc, collection, serverTimestamp, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';

import { db, storage } from '../firebase'

const BA20132014Store = (set, get) => ({
    figures: [],
    reset: () => set({ figures: [] }),
    setFigures: (data) => set({ figures: data }),
    addFigure: async(newFigure) => {
        try {
            console.log(newFigure);

            await addDoc(collection(db, 'BA20132014'), {
                ...newFigure,
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