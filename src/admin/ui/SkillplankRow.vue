<template lang='pug'>
  .block__row.block__row_first
    input.block__input.block__input_bb.block__input_first(
      name='newgroupname',
      v-model="input",
      required='',
      :disabled="!category.isEditRow ? true : false",
      :style="{pointerEvents: category.isEditRow ? 'auto' : 'none'}",
      :class="category.isEditRow ? 'block__input_active' : ''"
    )

    Btns(
      :onEdit="!category.isEditRow ? (() => onEdit(category)) : false"
      :onCross="category.isEditRow ? (() => onCross(category)) : false"
      :onTick="category.isEditRow ? (() => onTick(category)) : false"
    )

</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const {
    mapActions: categoriesMapActions,
    mapState: categoriesMapState,
    mapGetters: categoriesMapGetters,
    mapMutations: categoriesMapMutations
} = createNamespacedHelpers('categories');

export default {
  name: 'SkillplankRow',
  data () {
    return {}
  },
  props: {
    category: Object,
    onTickRow: Function,
    onEditRow: Function,
    onCrossRow: Function,
    handleRow: Function
  },
  computed: {
    input: {
      get () {
        return this.category.category;
      },
      set (value) {
        this.$emit('handleRow', value);
      }
    }
  },
  methods: {
    onTick(category) {
      this.$emit('onTickRow', this.category.id);
    },
    onEdit(category) {
      this.$emit('onEditRow', this.category.id);
    },
    onCross(category) {
      this.$emit('onCrossRow', this.category.id);
    }
  },
  components: {
    Btns: () => import('./Btns.vue')
  }
}
</script>


<style lang='pcss'>
@import "../../styles/mixins.pcss";

.block__row {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
}
.block__row_last {
  justify-content: flex-end;
}
.block__row_first {
  border-bottom: solid 1px #dedee0;
  padding: 5px;
  justify-content: space-between;
}
.block__input {
  width: fit-content;
  height: 100%;
  font-size: 18px;
  word-wrap: break-word;
  font-weight: 600;
  line-height: 1.89;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;

}
.block__input_bb {
  border-bottom: solid 1px #1f232d;
}
.block__input_first {
  padding: 0px 0px 0px 10px;
  margin-top: 25px;
  width: 60%;
}
</style>
