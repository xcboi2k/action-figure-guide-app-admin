import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useBA20142015Store } from './useBA20142015Store';

export default function useGetBA20142015List() {
    const setFigures = useBA20142015Store((state) => state.setFigures);

    useEffect(() => {
        const figureColRef = collection(db, 'BA20142015');
        const figureQuery = query(figureColRef, orderBy('figure_number'));

        const unsubscribe = onSnapshot(figureQuery, (snapshotData) => {
            const figures = [];
            snapshotData.forEach((doc) => {
                figures.push({
                    ...doc.data(), id: doc.id
                });
            });
            setFigures(figures);
        });
        return unsubscribe;
    }, []);
}