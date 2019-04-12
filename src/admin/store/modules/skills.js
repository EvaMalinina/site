export default  {
  namespaced: true,
  state: { 
    skills: []
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills
    }
  },
  actions: {
    async addNewSkill( {commit}, skill) {
      try {
        const response = await this.$axios.post('/skills', skill);
        console.log('fff')
        return response;    
      } catch (error) {
        alert('Request to get skill invalid')
      }
    },
    async fetchSkills( {commit}, skill) {
      try {
        const response = await this.$axios.get('/skills/129', skill);
        commit('SET_SKILLS', response.data)
        return response;    
      } catch (error) {
        alert('Request to fetch skill invalid')
      }
    }
  }
}