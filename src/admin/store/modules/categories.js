export default  {
  namespaced: true,
  state: { 
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    EDIT_CATEGORIES: (state, editedCategory) => {
      state.categories = state.categories.map(category => 
        category.id === editedCategory.id ? editedCategory : category
      );
    }
  },
  actions: {
   async  addNewSkillGroup({ commit }, groupTitle) {
     try {
       const response = await this.$axios.post('/categories', {
        title: groupTitle,
      });
      return response
     } catch (error) {
       throw new Error(error.response.data.error || error.response.data.message)
     }  
    },
    async fetchCategories({ commit }) {
      try {
        const response = await this.$axios.get('/categories');
        commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async  editSkillGroup({ commit }, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, category);
        commit('EDIT_CATEGORIES', response.data.category);
        return response
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }  
     },
    async user({ commit }) {
      try {
        const response = await this.$axios.get('/user');
        commit("SET_USER", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
}