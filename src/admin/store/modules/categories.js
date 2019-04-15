import Vue from 'vue';

export default  {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    inputVal: (state) => state.inputVal
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    EDIT_CATEGORIES: (state, editedCategory) => {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    },
    REMOVE_CATEGORIES: (state, deletedCategoryId) => {
      state.categories = state.categories.filter(category =>
        category.id !== deletedCategoryId
      );
    },
    HANDLE_CAT_NAME: (state, {catId, value}) => {
      console.log("value", value);
      console.log("catId", catId);
      state.categories = state.categories.map((cat) => {
        if (cat.id === catId) {
          Vue.set(cat, 'category', value);
        }

        return cat;
      });
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
    async editSkillGroup({ state, commit }, catId) {
      let category = state.categories.find((cat) => cat.id === catId);
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, {title: category.category});
        commit('EDIT_CATEGORIES', response.data.category);
        return response
      } catch (error) {
        throw new Error(error.response.data.error || error.response.data.message)
      }
     },
     async removeSkillGroup( {commit}, categoryId) {
      console.log("categoryId", categoryId);
      console.log(categoryId);
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        commit('REMOVE_CATEGORIES', categoryId)
        return response;
      } catch (error) {
        alert('Request to delete category invalid')
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
