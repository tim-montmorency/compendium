# Filtres et recherche

Dans le store pinia, ajoutez un objet `filtes`qui contient vos critères de recherche et filtres parmis les mémoires affichés dans la salle.

Ajoutez le `getters` nommé `filteredMemories` qui vous permettra d'afficher la dans salle les mémoires filtrées (donc vous allez faire un `v-for`sur `filteredMemories` pour dynamiser votre affichage).

`stores/memoryStore.js`

```javascript

export const useMemoryStore = defineStore('memory', {
    state: () => ({
        rooms: [],
        memories: [],
        
        filters: {
            searchQuery: '',      // Recherche textuelle
            selectedTags: [],     // Tags sélectionnés
            dateOrder: null,      // Odre plus récent ou plus ancien en premier
            selectedRoomId: null  // Salle sélectionnée (optionnel)
        }
    }),
    
    getters: {
        // 🔍 Mémoires filtrées selon tous les critères
        filteredMemories: (state) => {
        
            // ========================================
            // Filtrer par recherche textuelle
            // ========================================
            
            // Vérifier si une recherche textuelle a été saisie
            // trim() enlève les espaces au début et à la fin
            if (state.filters.searchQuery.trim()) {
            
                // Convertir la recherche en minuscules pour une recherche insensible à la casse
                const query = state.filters.searchQuery.toLowerCase();
                
                // Filtrer le tableau de mémoires
                memories = memories.filter(function(memory) {
                    
                    // Convertir le titre en minuscules
                    const titleInLowerCase = memory.title.toLowerCase();
                    
                    // Convertir la description en minuscules
                    const descriptionInLowerCase = memory.description.toLowerCase();
                    
                    // Vérifier si le titre contient la recherche
                    const titleContainsQuery = titleInLowerCase.includes(query);
                    
                    // Vérifier si la description contient la recherche
                    const descriptionContainsQuery = descriptionInLowerCase.includes(query);
                    
                    // Garder la mémoire SI :
                    // - le titre contient la recherche OU
                    // - la description contient la recherche
                    return titleContainsQuery || descriptionContainsQuery;
                });
            }
            
            
            // ========================================
            // Filtrer par tags
            // ========================================
            
            // Vérifier si des tags ont été sélectionnés
            if (state.filters.selectedTags.length > 0) {
            
                // Filtrer le tableau de mémoires
                memories = memories.filter(function(memory) {
                    
                    // Pour chaque mémoire, vérifier si elle possède AU MOINS UN des tags sélectionnés
                    // some() retourne true si AU MOINS UN élément satisfait la condition
                    const hasAtLeastOneSelectedTag = state.filters.selectedTags.some(function(selectedTag) {
                    
                    // Vérifier si le tag sélectionné est dans les tags de la mémoire
                    // includes() retourne true si l'élément est trouvé
                    const memoryHasThisTag = memory.tags.includes(selectedTag);
                    
                    return memoryHasThisTag;
                    });
                    
                    // Garder la mémoire SI elle a au moins un des tags sélectionnés
                    return hasAtLeastOneSelectedTag;
                });
            }
            
            // ========================================
            // Trier les résultats par date
            // ========================================
            
            // Trier le tableau par date décroissante (plus récent en premier)
            memories.sort(function(memoryA, memoryB) {
            
                // Convertir les chaînes de dates en objets Date
                const dateA = new Date(memoryA.date);
                const dateB = new Date(memoryB.date);
                
                // Soustraire les dates selon l'ordre choisi
                // Si le résultat est positif : B sera placé avant A
                // Si le résultat est négatif : A sera placé avant B
                // Si le résultat est 0 : les dates sont égales (ordre inchangé)

                if (state.filters.dateOrder=="asc"){
                    // ASCENDANT : Du plus ancien au plus récent
                    // dateA - dateB : si dateA < dateB → résultat négatif → A avant B ✅
                    return dateA - dateB;
                }else {
                    // DESCENDANT : Du plus récent au plus ancien
                    // dateB - dateA : si dateB > dateA → résultat positif → B avant A ✅
                    return dateB - dateA;
                }
            });
                
                
            // ========================================
            // Retourner le résultat final
            // ========================================
            
            // Retourner le tableau de mémoires après tous les filtres et le tri
            return memories;
        }
    },

  
    actions: {
        // Mettre à jour la recherche textuelle
        setSearchQuery(query) {
            this.filters.searchQuery = query;
        },
        
        // Ajouter/retirer un tag des filtres
        toggleTag(tag) {
            const index = this.filters.selectedTags.indexOf(tag);
            if (index > -1) {
                this.filters.selectedTags.splice(index, 1);
            } else {
                this.filters.selectedTags.push(tag);
            }
        },
        
        // Action pour définir l'ordre de tri par date
        setDateOrder(order) {
            
            if (order === 'asc' || order === 'desc') {
                this.filters.dateOrder = order;
            } else {
                console.warn('Ordre invalide. Utilisez "asc" ou "desc".');
            }
        },
        
   }
});

```
