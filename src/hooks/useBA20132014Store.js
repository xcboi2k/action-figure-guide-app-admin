import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

import { addDoc, collection, serverTimestamp, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';

import { db, storage } from '../firebase'
import { deleteObject, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const BA20132014Store = (set, get) => ({
    figures: [],
    reset: () => set({ figures: [] }),
    setFigures: (data) => set({ figures: data }),
    addFigure: async(newFigure, currentFile) => {
        const loader = toast.loading('Adding Figure');
        try {
            let fileUrl, fileRefName;
            if (currentFile) {
                fileRefName = `BA20132014/${uuidv4()}-${currentFile.name}`;
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

            toast.dismiss(loader);
            toast.success('Figure successfully added!');
        } catch (err) {
            console.log('addFigureError:', err);
        }
    },
    updateFigure: async(documentId, updatedFigure, newFile) => {
        const editLoader = toast.loading('Updating Figure');
        try{
            const docRef = doc(db, 'BA20132014', documentId);
            const currentFigureResponse = await getDoc(docRef);
            const currentFigure = currentFigureResponse.data();

            // UPDATE THE FILES
            // UPLOAD IMAGE
            const fileRef = ref(storage, currentFigure.photoRef);
            let fileUrl, fileRefName;
            if (currentFigure.photoUrl !== newFile?.source) {
                if (currentFigure.photoUrl !== '') {
                    // DELETE THE OBJECT
                    await deleteObject(fileRef);
                }

                if (newFile) {
                    {
                        fileRefName = `BA20132014/${uuidv4()}-${newFile.file.name}`;
                        const imageRef = ref(storage, fileRefName);

                        const fileUpload = await uploadBytes(imageRef, newFile.file);
                        fileUrl = await getDownloadURL(fileUpload.ref);
                        console.log('UPLOADED');
                    }
                }
            }
            // CREATE A REFERENCE TO THE DOCUMENT AND THE FILE
            await updateDoc(docRef, {
                ...updatedFigure,
                photoRef: fileRefName || currentFigure.photoRef,
                photoUrl: fileUrl || currentFigure.photoUrl
            });

            toast.success('Updated Successfully.');

            return true;
        } catch (err) {
            console.log('updateFigureError:', err);
            toast.error(err.message);

            return false;
        } finally {
            toast.dismiss(editLoader);
        }
    },
    deleteFigure: async(documentId, fileReference) => {
        console.log('Delete', documentId);
        const deleteLoader = toast.loading('Deleting Figure');
        // CREATE A REFERENCE FOR THE DOCUMENT AND THE FILE
        const docRef = doc(db, 'BA20132014', documentId);
        const fileRef = ref(storage, fileReference);
        try {

            // DELETE THE DOCUMENT AND OBJECT
            await deleteDoc(docRef);
            if (fileReference) {
                await deleteObject(fileRef);
            }
            // ALERT A MESSAGE

            toast.success('Deleted Successfully!');

            return true;
        } catch (err) {
            console.log('deleteFigureError:', err);
            // toast.error(err.message);
        } finally {
            toast.dismiss(deleteLoader);
        }
    },
});

export const useBA20132014Store = create(BA20132014Store);