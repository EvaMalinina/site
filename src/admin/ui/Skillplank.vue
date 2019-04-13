<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :category="category"
      @onEditRow = "onEditRow"
      @onTickRow = "onTickRow"
      @onCrossRow = "onCrossRow"
      @handleRow = "handleRow"
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
      // this.values.push(values);
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
    ...categoriesMapActions(['editSkillGroup']),
    async onTickRow (newCategoryData) {
      try {
        await this.editSkillGroup(this.editedSkillGroup)
        Vue.set(this.category, 'isEditRow', false);
      } catch (error) {
        alert('Group was not edited')
      }
    },
    handleRow(data) {
      console.log();
      this.categories = this.categories.map((el) => {
        if (el.id !== data.categoryId) {
          return el;
        }

        Vue.set(el, 'category', data.val);
        return el;
      });
    },
    // onTrash () { 
    //   // this.values = this.values.filter(item => item.id !== valueId);
    // },
    onEdit() { 
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', true);
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
    onEditRow(categoryId) {
      console.log("categoryId", categoryId);
      Vue.set(this.category, 'isEditRow', true);
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
