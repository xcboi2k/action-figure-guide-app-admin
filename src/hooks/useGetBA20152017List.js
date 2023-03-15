import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useBA20152017Store } from './useBA20152017Store';

export default function useGetBA20152017List() {
    const setFigures = useBA20152017Store((state) => state.setFigures);

    useEffect(() => {
        const figureColRef = collection(db, 'BA20152017');
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