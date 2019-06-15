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
    },
    HANDLE_SKILL_NAME: (state, {itemId, value}) => {
      console.log("value", value);
      console.log("itemId", itemId);
      state.skills = state.skills.map((item) => {
        if (item.id === itemId) {
          Vue.set(item, 'title', value);
        }

        return item;
      });
    },
    HANDLE_PRCNT: (state, {itemId, value}) => {
      console.log("value", value);
      console.log("itemId", itemId);
      state.skills = state.skills.map((item) => {
        if (item.id === itemId) {
          Vue.set(item, 'percent', value);
        }

        return item;
      });
    },
    HANDLE_SKILL: (state, {skill, skillId, value}) => {
      console.log("skill", skill);
      state.skills = state.skills.map((skill) => {
        if (skill.id === skillId) {
          Vue.set(skill, 'isEdit', value);
        }
        return skill;
      });
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
      console.log(skillId);
      try {
        const response = await this.$axios.delete(`/skills/${skillId}`);
        commit('REMOVE_SKILL', skillId)
        return response;
      } catch (error) {
        alert('Request to delete skill invalid')
      }
    },
    async editSkill( {state, commit}, skillId) {
      let skill = state.skills.find((item) => item.id === itemId);
      try {
        const response = await this.$axios.post(`/skills/${skill.id}`, {
          title: skill.title,
          percent: skill.percent,
          category: skill.id
      });
        commit('EDIT_SKILL', response.data.skill)
        return response;
      } catch (error) {
        alert('Request to edit skill invalid')
      }
    }
  }
}
