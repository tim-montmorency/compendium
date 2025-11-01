/**
 * Composable Vue pour gérer LocalStorage facilement
 * 
 * Usage:
 * import { useLocalStorage } from '@/composables/useLocalStorage';
 * 
 * const { save, load, clear, exists } = useLocalStorage('monMusee');
 * 
 * // Sauvegarder
 * save({ nom: 'Mon Musée', salles: [...] });
 * 
 * // Charger
 * const data = load();
 * 
 * // Vérifier si existe
 * if (exists()) { ... }
 * 
 * // Effacer
 * clear();
 */

export function useLocalStorage(key) {
  /**
   * Sauvegarde des données dans LocalStorage
   * @param {Object|Array} data - Les données à sauvegarder
   * @returns {boolean} - true si succès, false si erreur
   */
  const save = (data) => {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
      console.log(`✅ Données sauvegardées sous la clé "${key}"`);
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de la sauvegarde:', error);
      // Gestion du quota dépassé
      if (error.name === 'QuotaExceededError') {
        alert('Espace de stockage insuffisant. Veuillez supprimer des éléments.');
      }
      return false;
    }
  };

  /**
   * Charge les données depuis LocalStorage
   * @param {*} defaultValue - Valeur par défaut si rien n'existe
   * @returns {*} - Les données chargées ou defaultValue
   */
  const load = (defaultValue = null) => {
    try {
      const jsonData = localStorage.getItem(key);
      
      if (jsonData === null) {
        console.log(`ℹ️ Aucune donnée trouvée pour "${key}"`);
        return defaultValue;
      }

      const data = JSON.parse(jsonData);
      console.log(`✅ Données chargées depuis "${key}"`);
      return data;
    } catch (error) {
      console.error('❌ Erreur lors du chargement:', error);
      return defaultValue;
    }
  };

  /**
   * Vérifie si des données existent pour cette clé
   * @returns {boolean}
   */
  const exists = () => {
    return localStorage.getItem(key) !== null;
  };

  /**
   * Efface les données de cette clé
   * @returns {boolean}
   */
  const clear = () => {
    try {
      localStorage.removeItem(key);
      console.log(`🗑️ Données effacées pour "${key}"`);
      return true;
    } catch (error) {
      console.error('❌ Erreur lors de l\'effacement:', error);
      return false;
    }
  };

  /**
   * Exporte les données en fichier JSON téléchargeable
   * @param {string} filename - Nom du fichier (sans extension)
   */
  const exportToFile = (filename = key) => {
    const data = load();
    if (!data) {
      alert('Aucune donnée à exporter');
      return;
    }

    try {
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${filename}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      console.log(`📥 Export réussi: ${filename}.json`);
    } catch (error) {
      console.error('❌ Erreur lors de l\'export:', error);
    }
  };

  /**
   * Importe des données depuis un fichier JSON
   * @param {File} file - Le fichier à importer
   * @returns {Promise<boolean>}
   */
  const importFromFile = (file) => {
    return new Promise((resolve, reject) => {
      if (!file || file.type !== 'application/json') {
        alert('Veuillez sélectionner un fichier JSON valide');
        reject(new Error('Type de fichier invalide'));
        return;
      }

      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          const success = save(data);
          
          if (success) {
            console.log('📤 Import réussi');
            resolve(true);
          } else {
            reject(new Error('Échec de la sauvegarde'));
          }
        } catch (error) {
          console.error('❌ Fichier JSON invalide:', error);
          alert('Le fichier n\'est pas un JSON valide');
          reject(error);
        }
      };

      reader.onerror = () => {
        console.error('❌ Erreur de lecture du fichier');
        reject(new Error('Erreur de lecture'));
      };

      reader.readAsText(file);
    });
  };

  /**
   * Obtient la taille des données stockées (en Ko)
   * @returns {number}
   */
  const getSize = () => {
    const data = localStorage.getItem(key);
    if (!data) return 0;
    
    // Taille en octets, converti en Ko
    const sizeInBytes = new Blob([data]).size;
    return (sizeInBytes / 1024).toFixed(2);
  };

  return {
    save,
    load,
    exists,
    clear,
    exportToFile,
    importFromFile,
    getSize
  };
}

/**
 * Composable pour surveiller les changements de LocalStorage
 * Utile pour synchroniser entre onglets
 */
export function useLocalStorageWatch(key, callback) {
  const handleStorageChange = (e) => {
    if (e.key === key) {
      const newValue = e.newValue ? JSON.parse(e.newValue) : null;
      callback(newValue);
    }
  };

  // Écouter les changements
  window.addEventListener('storage', handleStorageChange);

  // Fonction de nettoyage
  const stopWatching = () => {
    window.removeEventListener('storage', handleStorageChange);
  };

  return { stopWatching };
}