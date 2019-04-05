<template lang='pug'>
  .block__row.block__row_last(
    :class="{error: validation.hasError('value.name')}"
  )
    input.block__input.block__input_newskill(
      name='newgroup',
      placeholder='New skill',
      autofocus
      required=''
      v-model="value.name"
      @keydown.enter="addSkill"
      :style="{borderColor: validation.hasError('value.name') ? 'red' : ''}"
    )
    //- diV {{ validation.firstError('value.name') }}
    div(:class="{error: validation.hasError('value.prc')}")
    input.block__input.block__input_percentage(
      name='percent',
      placeholder='100 %',
      required='',

      v-model="value.prc"
      @keydown.enter="addSkill"
    )
    diV {{ validation.firstError('value.prc') }}
    button.circle-btn.cirlce-btn_block(
      :class="isBtnDisabled ? 'disabled' : ''"
      @click="addSkill"
      :disabled="isBtnDisabled"
    )
</template>

<script>
import { Validator } from 'simple-vue-validator';

export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'value.name'(value) {
      return Validator.value(value).required();
    },
    'value.prc'(value) {
      return Validator.value(value).integer();
    }
  },
  name: 'SkillplankInput',
  data () {
    return {
      value: {
        id: Date.now(),
        name: 'GIT',
        prc: 100,
     }
    }
  },
  computed: {
    isBtnDisabled() {
      if (!this.value.name || !this.value.prc) {
        return true;
      }
      return false;
    }
  },
  methods: {
    addSkill() {
        this.$emit('addSkill', {...this.value});
        this.value.name = "";
        this.value.prc = "";
    },
    submit() {
      this.$validate().then(success => {
        if(!success) return;
      });
    },
    reset() {
      this.name = '';
      this.prc = '';
      this.validation.reset();
    }
  },
  components: {}
}
</script>


<style lang='pcss'>
@import "../../styles/mixins.pcss";
.block__input_newskill {
  width: 213px;
  margin-right: 10px;
}
.block__input_percentage {
  width: 74px;
  margin-right: 15px;
}
.cirlce-btn_block {
  width: 40px;
  height: 40px;
}
.cirlce-btn_block::after {
  font-size: 30px;
}
.block__input_newskill, .block__input_percentage {
  border-bottom: solid 1px #1f232d;
  padding-left: 5%;

  @include placeholder {
    opacity: 0.5;
    font-size: 16px;
    font-weight: normal;
    line-height: 6.2;
    text-align: left;
    color: rgba(55, 62, 66, 0.5);
  }
}
.error {
  color: red;
}
</style>
