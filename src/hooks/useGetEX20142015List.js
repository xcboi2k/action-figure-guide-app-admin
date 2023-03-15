import { useEffect, useState } from 'react';
import { onSnapshot, collection, orderBy, query, where } from 'firebase/firestore';
import { db } from '../firebase'

import { useEX20142015Store } from './useEX20142015Store';

export default function useGetEX20142015List() {
    const setFigures = useEX20142015Store((state) => state.setFigures);

    useEffect(() => {
        const figureColRef = collection(db, 'EX20142015');
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