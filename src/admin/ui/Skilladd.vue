<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :category="category"
      @onEditRow ="onEditRow"
      @onTickRow = "addSkillGroup"
      @onCrossRow = "removeNewSkill"
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
import { mapActions } from "vuex";

export default {
  name: 'Skilladd',
  props: {
    // category: Object,
    onHideNewSkill: Function,
    skills: Array,
  },
  data() {
    return {
      category: {
        
      },
      
    }
  },
  components: {
    SkillplankInput: () => import('./SkillplankInput.vue'),
    SkillplankList: () => import('./SkillplankList.vue'),
    SkillplankRow: () => import('./SkillplankRow.vue'),
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.category.category);

        this.category.category = ""
      } catch (error) {
        alert(error.message)
      }

    },
    addSkill(values) {
      console.log("values", values);
      this.values.push(values);
    },
    removeNewSkill(valueId) {
      this.$emit('onHideNewSkill');
    },
    onEditRow(categoryId) {
      console.log("categoryId", categoryId);
      Vue.set(this.category, 'isEditRow', true);
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
    clearSkill(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', '');
        Vue.set(el, 'prc', '');
        // event.target.reset();

        return el;
      });
    },
    handleRow(data) {
      this.values = this.values.map((el) => {
        if (el.id !== data.valueId) {
          return el;
        }

        Vue.set(el, 'name', data.val);
        // el.isEdit = true;
        return el;
      });
    }
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
