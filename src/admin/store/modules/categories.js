export default  {
  namespaced: true,
  state: { 
    categories: []
  },
  actions: {
   async  addNewSkillGroup(store, groupTitle) {
     try {
       const response = await this.$axios.post('/categories', {
        title: groupTitle,
      });
      return response
     } catch (error) {
       throw new Error(error.response.data.error || error.response.data.message)
     }  
    }  
  },
}