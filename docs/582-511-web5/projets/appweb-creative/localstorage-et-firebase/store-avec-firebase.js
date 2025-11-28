// store/museumStore.js - Utilisation
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

export const useMuseumStore = defineStore('museum', {
  actions: {
    async addMemory(memory) {
      // Ajouter à Firestore
      await addDoc(collection(db, 'memories'), {
        ...memory,
        createdAt: new Date()
      });
    },
    
    async loadMemories() {
      const querySnapshot = await getDocs(collection(db, 'memories'));
      this.memories = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    }
  }
});