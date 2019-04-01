<template lang="pug">
  .content-work
    .container
      .block-info
        .block-info__name Block «My works»
      .work-edit.block-bg-white
        .title.block-edit__title Work editing
        .work-edit__body
          .work-edit__left
            .text.work-edit__left-text Drag or drop to load image
            .work-edit__left-btn
              .button.button-ellipse Download

          .work-edit__right
            form.work-form
              label.work-form__block
                .work-form__block-title.text Title
                input.work-form__input(name='work-form-title', placeholder='Design of website for auto salon', required='')
              label.work-form__block
                .work-form__block-title.text Link
                input.work-form__input(name='work-form-link', placeholder='https://afterhoursautosalon.com', required='')
              label.work-form__block
                .work-form__block-title.text Description
                textarea.work-form__textarea(name="text", cols="10", rows="8", placeholder='Each of our Detail Experts have a background in car care that spans far beyond just your basic car care needs. Each member of our team is an avid enthusiast of all cars and trucks, attending regional events and shows, where we enter our own vehicles for judging throughout the season.' )
              label.work-form__block
                .work-form__block-title.text Add tag
                input.work-form__input(name='work-form-tag', placeholder='Jquery, Vue.js, HTML5', required='')
              .work-form__tags
                .work-form__tag
                  .work-form__tag-name HTML
                  .work-form__tag-close
                    img.work-form__tag-img
                .work-form__tag
                  .work-form__tag-name CSS
                  .work-form__tag-close
                    img.work-form__tag-img
                .work-form__tag
                  .work-form__tag-name JavaScript
                  .work-form__tag-close
                    img.work-form__tag-img
              .work-form__btns
                button.button-ellipse.button-ellipse_bg-trsp Decline
                button.button-ellipse Save
</template>

<script>
export default {
  name: 'WorkEdit'
};
</script>

<style lang="pcss">
@import "../../styles/mixins.pcss";
.content-work {
  display: grid;
  grid-area: content-works;
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
  padding: 8px 13px 8px 15px;
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
  margin-right: 10%;
}
.work-form__tag-close {
  min-width: 11px;
  height: 11px;
  display: flex;
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
