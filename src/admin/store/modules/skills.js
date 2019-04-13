export default  {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    SET_SKILLS: (state, skills) => {
      state.skills = skills
    },
    ADD_SKILL: (state, newSkill) => {
      state.skills.push(newSkill);
    },
    REMOVE_SKILL: (state, deletedSkillId) => {
      state.skills = state.skills.filter(skill => 
        skill.id !== deletedSkillId
      );
    },
    EDIT_SKILL: (state, editedSkill) => {
      state.skills = state.skills.map(skill => 
        skill.id === editedSkill.id ? editedSkill : skill
      );
    }
  },
  actions: {
    async addNewSkill( {commit}, skill) {
      console.log("skill", JSON.parse(JSON.stringify(skill)));
      try {
        const response = await this.$axios.post('/skills', skill);
        commit('ADD_SKILL', response.data);
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
    },
    async removeSkill( {commit}, skillId) {
      console.log();
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId)
        return response;
      } catch (error) {
        alert('Request to delete skill invalid')
      }
    },
    async editSkill( {commit}, skill) {
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, skill);
        commit('EDIT_SKILL', response.data.skill)
        return response;
      } catch (error) {
        alert('Request to edit skill invalid')
      }
    }
  }
}
