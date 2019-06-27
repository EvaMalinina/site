<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :category="category"
      @onEditRow = "onEditRow"
      @onTickRow = "onTickRow"
      @onCrossRow = "onTrashRow"
      @handleRow = "handleRow"  
    )
    SkillplankList(
      :skills = "skills"
      @onTrash = "onTrash"
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "onCrossClear"
      @handleSkillName="handleSkillName"
      @handleSkillPrc="handleSkillPrc"

    )
    SkillplankInput(
      @addSkill="addSkill"
    )

</template>

<script>
import Vue from 'vue';
import { logicalExpression } from 'babel-types';

import { createNamespacedHelpers } from 'vuex';
const {
  mapActions: categoriesMapActions,
  mapState: categoriesMapState,
  mapGetters: categoriesMapGetters,
  mapMutations: categoriesMapMutations
} = createNamespacedHelpers('categories');
const {
  mapActions: skillsMapActions,
  mapState: skillsMapState,
  mapGetters: skillsMapGetters,
  mapMutations: skillsMapMutations
} = createNamespacedHelpers('skills');

export default {
  name: 'Skillplank',
  props: {
    category: Object,
    skills: Array
  },
  data() {
    return {}
  },
  components: {
    SkillplankInput: () => import('./SkillplankInput.vue'),
    SkillplankList: () => import('./SkillplankList.vue'),
    SkillplankRow: () => import('./SkillplankRow.vue'),
  },
  methods: {
    ...categoriesMapActions([
      'editSkillGroup',
      'removeSkillGroup'
    ]),
    ...skillsMapActions([
      'addNewSkill',
      'removeSkill',
      'editSkill'
    ]),
    ...categoriesMapMutations([
      'HANDLE_CAT_NAME'
    ]),
    ...skillsMapMutations([
      'HANDLE_SKILL_NAME',
      'HANDLE_PRCNT',
      'HANDLE_SKILL',
      'CLEAR_SKILL'
    ]),

    onEditRow(category) {
      Vue.set(this.category, 'isEditRow', true);
    },

    async onTickRow() {
      try {
        await this.editSkillGroup(this.category.id);
      } catch (error) {
        alert('Group was not edited')
      }
      Vue.set(this.category, 'isEditRow', false);
    },

    async onTrashRow() {
      try {
        await this.removeSkillGroup(this.category.id)
      } catch (error) {
        alert('Category was not removed')
      }
    },
    
    handleRow(value) {
      this['HANDLE_CAT_NAME']({
        catId: this.category.id,
        value
      })
    },

    onEdit(skill) {
      this['HANDLE_SKILL']({
        skill: skill,
        skillId: skill.id,
        value: true
      })
    },

    onCrossClear(skill) {
      console.log("skill", skill);
      this['CLEAR_SKILL']({
        skill: skill,
        skillId: skill.id,
        value: false
      })
    },

    async addSkill(newSkillData) {
      try {
        await this.addNewSkill({
          ...newSkillData,
          category: this.category.id
        });
      } catch (error) {
        alert('New skill did not add')
      }
    },

    async onTrash (skillId) {
      console.log(skillId)
      try {
        await this.removeSkill(skillId)
      } catch (error) {
        alert('Skill was not removed')
      }
    },

    async onTick(skill) {
      try {
        await this.editSkill(this.skill.id)
      } catch (error) {
        alert('Skill was not edited')
      }
      Vue.set(skill, 'isEdit', false);
    },

    handleSkillName(value) {
      this['HANDLE_SKILL_NAME']({
        skillId: this.skill.id,
        value
      })
    },

    handleSkillPrc(value) {
      this['HANDLE_PRCNT']({
        skillId: this.skill.id,
        value
      })
    },

    // onTick(skillId) {
      
    //   // let editeSkill = this.skills.find((el) => el.id === skillId);
    //   // // валидация на проценты чтоб былон е больше 100
    //   // if (editeSkill.percent > 100) {
    //   //   alert('Проценты не могут быть больше 100');
    //   //   return;
    //   // }

    //   // -> /skills/{id} отправляешь запрос на бекенд на сохранения измененных данных
    //   // -> после удачного завершения запроса, ты выполняешь код дальше.
    //   // в противном случае return;
    // },

    async onTick() {
      try {
        await this.editSkill(this.skill.id);
      } catch (error) {
        alert('Skill was not edited')
      }
      Vue.set(this.skill, 'isEdit', false);
    }
  },
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
