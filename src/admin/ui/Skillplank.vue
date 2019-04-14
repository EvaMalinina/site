<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :category="category"
      @onEditRow = "onEditRow"
      @onTickRow = "editSkillGroup"
      @onCrossRow = "onTrash"
    )
    SkillplankList(
      :skills = "skills"
      @onTrash = "onTrash"
      @onEdit = "onEdit"
      @onTick = "onTick"
      @onCross = "clearSkill"
      @handleName="handleName"
      @handlePrc="handlePrc"

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
    skills: Array,
  },
  data() {
    return {

    }
  },
  components: {
    SkillplankInput: () => import('./SkillplankInput.vue'),
    SkillplankList: () => import('./SkillplankList.vue'),
    SkillplankRow: () => import('./SkillplankRow.vue'),
  },
  methods: {
    onEditRow(category) {
      Vue.set(this.category, 'isEditRow', true);
    },
     ...categoriesMapActions(['editSkillGroup']),
    async onTickRow (editedSkillGroup) { 
      console.log(editedSkillGroup) 
      try {
        await this.editSkillGroup(this.editedCategory);
      } catch (error) {
        alert('Group was not edited')
      }
      Vue.set(this.category, 'isEditRow', false);
    },
    ...categoriesMapActions(['removeSkillGroup']),
    async onTrash (categoryId) {
    console.log("categoryId");
      try {
        await this.removeCategory(this.categoryId)
        console.log("categoryId");
      } catch (error) {
        alert('Category was not removed')
      }
    },
    ...skillsMapActions(['addNewSkill']),
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
    ...skillsMapActions(['removeSkill', 'editSkill']),
    async onTrash (skillId) {
      try {
        await this.removeSkill(this.skillId)
      } catch (error) {
        alert('Skill was not removed')
      }
    },
    async onTick(newSkillData) {
      try {
        await this.editSkill(this.editedSkill)
        this.isEdit = false;
      } catch (error) {
        alert('Skill was not edited')
      }
    },
    // onTrash () { 
    //   // this.values = this.values.filter(item => item.id !== valueId);
    // },
    onEdit(skillId) { 
      this.skills = this.skills.map((el) => {
        if (el.id !== skillId ) {
          return el;
        }

        Vue.set(this.skill, 'isEdit', true);
        return el;
      });
    },
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
    },
  },
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
