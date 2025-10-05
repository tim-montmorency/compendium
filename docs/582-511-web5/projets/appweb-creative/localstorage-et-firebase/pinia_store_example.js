/**
 * Store Pinia pour gérer le musée avec LocalStorage
 * Exemple pour "Mémoires Interactives"
 * 
 * Adapté facilement pour "Choisis ta Voie" en changeant la structure
 */

import { defineStore } from 'pinia';
import { useLocalStorage } from '@/composables/useLocalStorage';

const STORAGE_KEY = 'mon-musee';
const storage = useLocalStorage(STORAGE_KEY);

export const useMuseumStore = defineStore('museum', {
  state: () => ({
    // Informations générales du musée
    museumName: 'Mon Musée Personnel',
    theme: 'default', // 'default', 'dark', 'vintage', etc.
    
    // Collections de salles et mémoires
    rooms: [
      // Exemple de structure:
      // {
      //   id: '1',
      //   name: 'Souvenirs d\'enfance',
      //   theme: 'childhood',
      //   color: '#FFB6C1',
      //   memories: []
      // }
    ],
    
    currentRoomId: null,
    
    // Métadonnées
    createdAt: new Date().toISOString(),
    lastModified: new Date().toISOString(),
  }),

  getters: {
    /**
     * Obtenir la salle courante
     */
    currentRoom: (state) => {
      return state.rooms.find(room => room.id === state.currentRoomId) || null;
    },

    /**
     * Obtenir toutes les mémoires du musée
     */
    allMemories: (state) => {
      return state.rooms.flatMap(room => room.memories || []);
    },

    /**
     * Compter le nombre total de mémoires
     */
    totalMemoriesCount: (state) => {
      return state.rooms.reduce((total, room) => {
        return total + (room.memories?.length || 0);
      }, 0);
    },

    /**
     * Obtenir les statistiques du musée
     */
    statistics: (state) => {
      return {
        totalRooms: state.rooms.length,
        totalMemories: state.rooms.reduce((sum, room) => sum + (room.memories?.length || 0), 0),
        lastModified: state.lastModified,
        storageSize: storage.getSize() + ' Ko'
      };
    },

    /**
     * Vérifier si le musée est vide
     */
    isEmpty: (state) => {
      return state.rooms.length === 0;
    }
  },

  actions: {
    /**
     * Initialiser le store depuis LocalStorage
     * À appeler au démarrage de l'app
     */
    initialize() {
      const savedData = storage.load();
      
      if (savedData) {
        // Charger les données sauvegardées
        this.$patch(savedData);
        console.log('✅ Musée chargé depuis LocalStorage');
      } else {
        // Créer un musée par défaut avec une salle exemple
        this.createDefaultMuseum();
        console.log('🆕 Nouveau musée créé');
      }
    },

    /**
     * Créer un musée par défaut avec une salle exemple
     */
    createDefaultMuseum() {
      this.rooms = [
        {
          id: this.generateId(),
          name: 'Ma première salle',
          description: 'Commencez à ajouter vos souvenirs ici',
          theme: 'default',
          color: '#6366f1',
          memories: []
        }
      ];
      this.currentRoomId = this.rooms[0].id;
      this.saveToLocalStorage();
    },

    /**
     * Sauvegarder l'état actuel dans LocalStorage
     */
    saveToLocalStorage() {
      this.lastModified = new Date().toISOString();
      const success = storage.save(this.$state);
      
      if (!success) {
        console.error('❌ Échec de la sauvegarde');
        // Vous pourriez afficher une notification à l'utilisateur ici
      }
    },

    /**
     * Ajouter une nouvelle salle
     */
    addRoom(roomData) {
      const newRoom = {
        id: this.generateId(),
        name: roomData.name || 'Nouvelle salle',
        description: roomData.description || '',
        theme: roomData.theme || 'default',
        color: roomData.color || '#6366f1',
        memories: [],
        createdAt: new Date().toISOString()
      };

      this.rooms.push(newRoom);
      this.saveToLocalStorage();
      
      return newRoom;
    },

    /**
     * Modifier une salle existante
     */
    updateRoom(roomId, updates) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room) {
        console.error('Salle non trouvée');
        return false;
      }

      Object.assign(room, updates);
      this.saveToLocalStorage();
      return true;
    },

    /**
     * Supprimer une salle
     */
    deleteRoom(roomId) {
      const index = this.rooms.findIndex(r => r.id === roomId);
      if (index === -1) return false;

      this.rooms.splice(index, 1);
      
      // Si c'était la salle courante, changer pour la première salle
      if (this.currentRoomId === roomId) {
        this.currentRoomId = this.rooms[0]?.id || null;
      }

      this.saveToLocalStorage();
      return true;
    },

    /**
     * Changer de salle courante
     */
    setCurrentRoom(roomId) {
      const room = this.rooms.find(r => r.id === roomId);
      if (room) {
        this.currentRoomId = roomId;
        return true;
      }
      return false;
    },

    /**
     * Ajouter une mémoire à une salle
     */
    addMemory(roomId, memoryData) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room) {
        console.error('Salle non trouvée');
        return null;
      }

      const newMemory = {
        id: this.generateId(),
        title: memoryData.title || 'Sans titre',
        description: memoryData.description || '',
        date: memoryData.date || new Date().toISOString(),
        image: memoryData.image || null,
        tags: memoryData.tags || [],
        createdAt: new Date().toISOString()
      };

      if (!room.memories) {
        room.memories = [];
      }

      room.memories.push(newMemory);
      this.saveToLocalStorage();
      
      return newMemory;
    },

    /**
     * Modifier une mémoire
     */
    updateMemory(roomId, memoryId, updates) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room || !room.memories) return false;

      const memory = room.memories.find(m => m.id === memoryId);
      if (!memory) return false;

      Object.assign(memory, updates);
      this.saveToLocalStorage();
      return true;
    },

    /**
     * Supprimer une mémoire
     */
    deleteMemory(roomId, memoryId) {
      const room = this.rooms.find(r => r.id === roomId);
      if (!room || !room.memories) return false;

      const index = room.memories.findIndex(m => m.id === memoryId);
      if (index === -1) return false;

      room.memories.splice(index, 1);
      this.saveToLocalStorage();
      return true;
    },

    /**
     * Rechercher des mémoires par mot-clé
     */
    searchMemories(searchTerm) {
      const term = searchTerm.toLowerCase();
      const results = [];

      this.rooms.forEach(room => {
        if (!room.memories) return;

        room.memories.forEach(memory => {
          const matchTitle = memory.title.toLowerCase().includes(term);
          const matchDesc = memory.description.toLowerCase().includes(term);
          const matchTags = memory.tags?.some(tag => 
            tag.toLowerCase().includes(term)
          );

          if (matchTitle || matchDesc || matchTags) {
            results.push({
              ...memory,
              roomId: room.id,
              roomName: room.name
            });
          }
        });
      });

      return results;
    },

    /**
     * Filtrer les mémoires par tag
     */
    getMemoriesByTag(tag) {
      const results = [];

      this.rooms.forEach(room => {
        if (!room.memories) return;

        room.memories.forEach(memory => {
          if (memory.tags?.includes(tag)) {
            results.push({
              ...memory,
              roomId: room.id,
              roomName: room.name
            });
          }
        });
      });

      return results;
    },

    /**
     * Obtenir tous les tags utilisés
     */
    getAllTags() {
      const tagsSet = new Set();

      this.rooms.forEach(room => {
        room.memories?.forEach(memory => {
          memory.tags?.forEach(tag => tagsSet.add(tag));
        });
      });

      return Array.from(tagsSet).sort();
    },

    /**
     * Exporter le musée en fichier JSON
     */
    exportMuseum() {
      storage.exportToFile(`${this.museumName.replace(/\s+/g, '-')}`);
    },

    /**
     * Importer un musée depuis un fichier JSON
     */
    async importMuseum(file) {
      try {
        await storage.importFromFile(file);
        // Recharger les données
        this.initialize();
        return true;
      } catch (error) {
        console.error('Erreur d\'importation:', error);
        return false;
      }
    },

    /**
     * Réinitialiser complètement le musée
     */
    resetMuseum() {
      if (confirm('Êtes-vous sûr de vouloir effacer tout votre musée ?')) {
        storage.clear();
        this.createDefaultMuseum();
        return true;
      }
      return false;
    },

    /**
     * Générer un ID unique simple
     */
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
  }
});

/**
 * Pour "Choisis ta Voie", la structure serait similaire:
 * 
 * state: () => ({
 *   storyName: 'Mon Histoire',
 *   currentChapterId: null,
 *   chapters: [],
 *   choices: [],
 *   inventory: [],
 *   characterStats: { health: 100, ... }
 * })
 * 
 * Les actions seraient adaptées:
 * - addChapter(), updateChapter(), deleteChapter()
 * - makeChoice(), undoChoice()
 * - addToInventory(), removeFromInventory()
 * - updateStats()
 * - saveProgress(), loadProgress()
 */