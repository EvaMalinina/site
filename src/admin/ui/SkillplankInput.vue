<template lang='pug'>
  .block__row.block__row_last(
    :class="{error: validation.hasError('skill.title')}"
  )
    input.block__input.block__input_newskill(
      name='newgroup',
      placeholder='New skill',
      autofocus
      required=''
      v-model="skill.title"
      :style="{borderColor: validation.hasError('skill.title') ? 'red' : ''}"
    )
   
    div(:class="{error: validation.hasError('skill.percent')}")
    input.block__input.block__input_percentage(
      type= Number, 
      name='percent',
      placeholder='100',
      required='',
      v-model="skill.percent"
      :style="{borderColor: validation.hasError('skill.percent') ? 'red' : ''}"
    )
     
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
    'skill.title'(skill) {
      return Validator.value(skill).required();
    },
    'skill.percent'(skill) {
      return Validator.value(skill).integer();
    }
  },
  name: 'SkillplankInput',
  data () {
    return {
      skill: {
        category: this.id,
        title: '',
        percent: ''
      }
    //   value: {
    //     id: Date.now(),
    //     name: '',
    //     prc: '',
    //  }
    }
  },
  computed: {
    isBtnDisabled() {
      if (!this.skill.title|| !/^[\d]*$/.test(this.skill.percent) || this.skill.percent > 100) {
        return true;
      }
      return false;
    }
  },
  methods: {
    addSkill() {
        this.$emit('addSkill', {...this.skill});
        this.skill.title = "";
        this.skill.percent = "";
        
    },
    submit() {
      this.$validate().then(success => {
        if(!success) return;
      });
    },
    reset() {
      this.title = '';
      this.percent = '';
      this.validation.reset();
    }
  },
  components: {}
}
</script>


<style lang='pcss'>

.block__input_newskill {
  max-width: 45%;
  margin-right: 2%;
}
.block__input_percentage {
  max-width: 15%;
  margin-right: 3%;
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
  opacity: 0.5;
  font-size: 16px;
  font-weight: 400;
  line-height: 6.2;
  text-align: left;
  color: rgba(55, 62, 66, 0.5);
  
}
.disabled {
  opacity: 0.8;
}
.error {
  color: red;
}
</style>
