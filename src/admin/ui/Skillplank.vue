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
      @onCross = "clearSkill"
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
      'HANDLE_SKILL'
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
      console.log(skill);
      this['HANDLE_SKILL']({
        skill: skill,
        skillId: skill.id,
        isEdit: true
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
        itemId: this.skill.id,
        value
      })
    },

    handleSkillPrc(value) {
      this['HANDLE_PRCNT']({
        itemId: this.skill.id,
        value
      })
    },

    // onTrash () {
    //   // this.values = this.values.filter(item => item.id !== valueId);
    // },
    // onEdit(skillId) {
    //   this.skills = this.skills.map((el) => {
    //     if (el.id !== skillId ) {
    //       return el;
    //     }

    //     Vue.set(this.skill, 'isEdit', true);
    //     return el;
    //   });
    // },
    onTick(skillId) {
      let editeSkill = this.skills.find((el) => el.id === skillId);
      // валидация на проценты чтоб былон е больше 100
      if (editeSkill.percent > 100) {
        alert('Проценты не могут быть больше 100');
        return;
      }

      // -> /skills/{id} отправляешь запрос на бекенд на сохранения измененных данных
      // -> после удачного завершения запроса, ты выполняешь код дальше.
      // в противном случае return;

      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isEdit = true;
        return el;
      });
    },
    onCross(valueId) {
      console.log("valueId", valueId);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isCross = false;
        return el;
      });
    },
    handleName(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', data.val);
        // el.isEdit = true;
        return el;
      });
    },
    handlePrc(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'prc', data.prc);
        // el.isEdit = true;
        return el;
      });
    },
    clearSkill(valueId) {

      this.values = this.values.map((el) => {
        if (el.id !== valueId) {
          return el;
        }

        Vue.set(el, 'name', '');
        Vue.set(el, 'prc', '');
        // event.target.reset();

        return el;
      });
    },
    // onTickRow(valueId) {
    //   Vue.set(this.category, 'isEditRow', false);
    // },
    onCrossRow(valueId) {
      // console.log(this);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', false);
        // el.isCross = false;
        return el;
      });
    }
  },
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
