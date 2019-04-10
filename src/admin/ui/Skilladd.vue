<template lang="pug">
  .block.block-workflow
    SkillplankRow(
      :value = "value"
      @onTickRow = "onTickRow"
      @onCrossRow = "removeNewSkill"
      @handleRow = "handleRow"
    )

    SkillplankList(
      :values = "values"
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
import SkillplankInput from "./SkillplankInput"
import SkillplankList from "./SkillplankList"
import SkillplankRow from "./SkillplankRow"
import { logicalExpression } from 'babel-types';
import { mapActions } from "vuex";

export default {
  name: 'Skilladd',
  data() {
    return {
      SkillName: "",
      values: [
        // {
        // id: '',
        // name: '',
        // prc: '',
        // }
      ],
      value: {
        id: Math.random(),
        skillTitle: 'Name of new group',
        isEditRow: true
      },
    }
  },
  props: {
    onHideNewSkill: Function
  },
  components: {
    SkillplankInput,
    SkillplankList,
    SkillplankRow
  },
  methods: {
    ...mapActions('categories', ['addNewSkillGroup']),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.SkillName);
        this.SkillName = ""
      } catch (error) {
        alert(error.message)
      }

    },
    addSkill(values) {
      this.values.push(values);
    },
    onTrash (valueId) {
      this.values = this.values.filter(item => item.id !== valueId);
    },
    onEdit(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', true);
        // el.isEdit = true;
        return el;
      });
    },
    onTick(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEdit', false);
        // el.isEdit = true;
        return el;
      });
    },
    removeNewSkill(valueId) {
      this.$emit('onHideNewSkill');
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
    onEditRow(valueId) {
      console.log(value);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', true);
        // el.isEdit = true;
        return el;
      });
    },
    onTickRow(valueId) {
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', false);
        // el.isEdit = true;
        return el;
      });
    },
    skdjnfsldkm(valueId) {
      console.log(this);
      this.values = this.values.map((el) => {
        if (el.id !== valueId ) {
          return el;
        }

        Vue.set(el, 'isEditRow', false);
        // el.isCross = false;
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
    },
  }
};
</script>

<style lang="pcss">
@import "./skillplank.pcss";
</style>
