<template lang="pug">
  .content-work
    .container
      .block-info
        .block-info__name Block «My works»
      .work-edit.block-bg-white
        .title.block-edit__title Work editing
        label.work-edit__body
          .work-edit__left(
            :class="{'filled': this.rendedPhotoUrl.length}"
            :style="{'backgroundImage': `url(${this.rendedPhotoUrl})`}"
          )
            input(
              type="file"
              @change="appendFileAndRenderPhoto" 
            )
            .text.work-edit__left-text Drag or drop to load image
            .work-edit__left-btn
              .button.button-ellipse Download

          .work-edit__right
            .work-form
              label.work-form__block
                .work-form__block-title.text Title
                input.work-form__input(
                  name='work-form-title', 
                  placeholder='Design of website for auto salon', 
                  required='',
                  v-model="inputTitle"
                )
              label.work-form__block
                .work-form__block-title.text Link
                input.work-form__input(
                  name='work-form-link', 
                  placeholder='https://afterhoursautosalon.com', 
                  required='',
                  v-model="inputLink"
                  )
              
              label.work-form__block
                .work-form__block-title.text Description
                textarea.work-form__textarea(
                  name="text", cols="10", rows="8", 
                  placeholder='Each of our Detail Experts have a background in car care that spans far beyond just your basic car care needs. Each member of our team is an avid enthusiast of all cars and trucks, attending regional events and shows, where we enter our own vehicles for judging throughout the season.'
                
                )
              label.work-form__block
                .work-form__block-title.text Add tag
                input.work-form__input(name='work-form-tag', placeholder='Jquery, Vue.js, HTML5', required='')
              .work-form__tags
                .work-form__tag
                  .work-form__tag-name HTML
                  .work-form__tag-close
                    button.button__tag-close
                .work-form__tag
                  .work-form__tag-name CSS
                  .work-form__tag-close
                    button.button__tag-close
                .work-form__tag
                  .work-form__tag-name JavaScript
                  .work-form__tag-close
                    button.button__tag-close
              .work-form__btns
                button.button-ellipse.button-ellipse_bg-trsp(
                  @click="decline"
                ) Decline
                button.button-ellipse(
                  @click="submit"
                ) Save
</template>

<script>
export default {
  name: 'WorkEdit',
  props: {
    onSubmit: Function,
  },
  data() {
    return {  
      rendedPhotoUrl: '',
      workExample: {
        title: '',
        techs: '',
        photo: '',
        link: '',
        description: ''
      }
    }
  },
  computed: {
    inputTitle: {
      get () {
        return this.title;
      },
      set (value) {
        this.$emit('handleTitle', value);
      }
    },
    inputLink: {
      get () {
        return this.percent;
      },
      set (value) {
        this.$emit('handleLink', value);
      }
    },
  },
  methods: {
    submit() {
      console.log('sdsf');

      this.$emit('onSubmit', {
        // workExample: {
        //   title: '',
        //   techs: '',
        //   photo: '',
        //   link: '',
        //   description: ''
        // } 
        title: '',
        techs: '',
        description: '',
        file: '',
        link: '',
        description: ''
      });
    },
    decline(valueId) {
      this.$emit('onHideNewWork');
    },
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.workExample.photo = file;

      const reader = new FileReader();
      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.rendedPhotoUrl = reader.result;
        }
      } catch (error) {
        alert('Ops...Something is wrong.')
      }
    }
  }
};
</script>

<style lang="pcss">
@import "../../styles/mixins.pcss";
input {
  display: flex;
  z-index: -10;
}
.content-work {
  background-color:#f7f9fe;
}
.block-bg-white {
  background-color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
}
.work-edit {
  margin-bottom: 30px;
}
.block-edit__title {
  margin-bottom: 48px;
  text-align: left;
  border-bottom: solid 1px #dedee0;
  padding-bottom: 25px;
}
.title {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.89;
  letter-spacing: normal;
  color: #414c63;
}
.work-edit__body {
  width: 95%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.work-edit__left {
  width: 45%;
  margin-right: 5%;
  height: 276px;
  border: dashed 8px 1px #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 25px;  
}
.work-edit__left{
  &.filled {
    background: center center no-repeat / cover;

    &.work-edit__left-text{
      display: none;
    }
    &.work-edit__left-btn{
      display: none;
    }
  }
}

.work-edit__left-text {
  width: 21%;
  text-align: center;
  margin-bottom: 25px;
}
.text {
  opacity: 0.5;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.12;
  letter-spacing: normal;
  color: rgba(65, 76, 99, 0.5);
}
.button-ellipse {
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  padding: 13px 40px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
}
.work-edit__right {
  width: 45%;
}
.work-form__block-title {
  text-align: left;
  margin-bottom: 16px;
}
.work-form {
  display: flex;
  flex-direction: column;
}
.work-form__block {
  flex: 1;
}
.work-form__input {
  width: 100%;
  border-bottom: solid 2px #414c63;
  padding-bottom: 15px;
  margin-bottom: 22px;
  @include placeholder {
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #414c63;

  }
}
.work-form__textarea {
  width: 100%;
  overflow: hidden;
  border: solid 1px #d9dbe0;
  resize: none;
  outline: none;
  padding: 15px;

  @include placeholder {
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #414c63;
  }
}
.work-form__tags {
  display: flex;
  margin-bottom: 40px;
}
.work-form__tag {
  margin-right: 0.8%;
  border-radius: 14.9px;
  background-color: #f4f4f4;
  padding: 8px 26px 8px 15px;
  display: flex;
  align-items: center;
}
.work-form__tag-name {
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: rgba(40, 51, 64, 0.7);
  margin-right: 13%;
}
.work-form__tag-close {
  min-width: 11px;
  height: 11px;
  display: flex;
}
.button__tag-close {
  height: 100%;
  width: 100%;
  background: svg-load('../../images/icons/remove.svg',  fill= #414c63, height=100%, width=100%);
  background-repeat: no-repeat;
}
.work-form__tag-img {
  background-image: url('../../images/icons/remove.svg');
  background-size: contain;
  width: 100%;
  height: 100%;
}
.work-form__btns {
  align-self: flex-end
}
.button-ellipse_bg-trsp {
  background: transparent;
  text-transform: capitalize;
  color: #383bcf;
}
</style>
