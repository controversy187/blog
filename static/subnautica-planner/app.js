// Main Alpine.js component for the Subnautica Planner
function subnauticaApp() {
    return {
      // STATE: All data for the application will be stored here.
      recipes: [],
      searchText: '',
      selectedCategory: 'All',
      buildList: {},
      intermediateItems: {},
      shoppingList: {},
      isLoading: true,
      error: null,
      
      /**
       * init()
       * This is a special Alpine.js function that runs automatically
       * when the component is initialized. It's the perfect place
       * to fetch our initial data.
       */
      init() {
        console.log('Application initialized.');
        this.isLoading = true;
        
        // Fetch recipes data
        fetch('./data/recipes.json')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            this.recipes = data;
            this.isLoading = false;
            console.log('Recipes loaded:', this.recipes);
          })
          .catch(error => {
            console.error('Error loading recipes:', error);
            this.error = 'Failed to load recipes. Please refresh the page.';
            this.isLoading = false;
          });
          
        // Watch for changes in build list and recalculate shopping list
        this.$watch('buildList', () => {
          this.calculateShoppingList();
        }, { deep: true });
      },
  
      // METHODS: All functions that manipulate the state will go here.
      
      // Add item to build list
      addItem(id) {
        if (this.buildList[id]) {
          this.buildList[id]++;
        } else {
          this.buildList[id] = 1;
        }
      },
      
      // Remove item from build list
      removeItem(id) {
        if (this.buildList[id] && this.buildList[id] > 1) {
          this.buildList[id]--;
        } else {
          delete this.buildList[id];
        }
      },
      
      // Clear entire build list
      clearBuildList() {
        this.buildList = {};
      },
      
      // Helper method to get recipe name from ID
      getRecipeName(id) {
        const recipe = this.recipes.find(r => r.id === id);
        return recipe ? recipe.name : id;
      },
      
      // Calculate shopping list based on build list with recursive dependency resolution
      calculateShoppingList() {
        const newIntermediateItems = {};
        const newRawMaterials = {};
        
        // Recursively resolve all dependencies (but don't add root items to intermediate)
        for (const [itemId, quantity] of Object.entries(this.buildList)) {
          this.resolveDependencies(itemId, quantity, newIntermediateItems, newRawMaterials, true);
        }
        
        this.intermediateItems = newIntermediateItems;
        this.shoppingList = newRawMaterials;
        console.log('Intermediate items:', this.intermediateItems);
        console.log('Raw materials:', this.shoppingList);
      },
      
      // Recursive helper method to resolve dependencies
      resolveDependencies(itemId, quantity, intermediateItems, rawMaterials, isRootItem = false) {
        const recipe = this.recipes.find(r => r.id === itemId);
        
        if (recipe && recipe.components) {
          // This item has components, so it's intermediate
          // But only add it to intermediate items if it's NOT the root item
          if (!isRootItem) {
            if (intermediateItems[itemId]) {
              intermediateItems[itemId] += quantity;
            } else {
              intermediateItems[itemId] = quantity;
            }
          }
          
          // Recursively resolve each component (these are never root items)
          recipe.components.forEach(component => {
            this.resolveDependencies(component.id, component.quantity * quantity, intermediateItems, rawMaterials, false);
          });
        } else {
          // This is a raw material
          if (rawMaterials[itemId]) {
            rawMaterials[itemId] += quantity;
          } else {
            rawMaterials[itemId] = quantity;
          }
        }
      },
      
      // Get total items in build list
      get buildListCount() {
        return Object.values(this.buildList).reduce((sum, qty) => sum + qty, 0);
      },
      
      // Get total intermediate items needed
      get totalIntermediateItems() {
        return Object.values(this.intermediateItems).reduce((sum, qty) => sum + qty, 0);
      },
      
      // Get total raw materials needed
      get totalRawMaterials() {
        return Object.values(this.shoppingList).reduce((sum, qty) => sum + qty, 0);
      },
      
      // Computed property to filter recipes based on search and category
      get filteredRecipes() {
        let filtered = this.recipes;
        
        // Apply search filter
        if (this.searchText) {
          filtered = filtered.filter(recipe => 
            recipe.name.toLowerCase().includes(this.searchText.toLowerCase())
          );
        }
        
        // Apply category filter
        if (this.selectedCategory !== 'All') {
          filtered = filtered.filter(recipe => 
            recipe.category === this.selectedCategory
          );
        }
        
        // Sort alphabetically by name
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      }
    };
  }
  