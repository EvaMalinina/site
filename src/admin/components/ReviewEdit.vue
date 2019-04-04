<template lang="pug">
  div.reviews
    .container
      .block-info
        .block-info__name Block «Reviews»
      .review-edit.block-bg-white
        .title.block-edit__title New review
        .review-edit__body
          .review-edit__person
            .review-edit__photo
              .review-edit__icon
            .review-edit__text Add photo
          .review-edit__form
            form.work-form
              .work-form__row
                label.work-form__block.work-form__block_review
                  .work-form__block-title.text Autor name
                  input.work-form__input(name='work-form-autor', placeholder='Kovalchuk Dmytryi', required='')
                label.work-form__block.work-form__block_review
                  .work-form__block-title.text Author profession
                  input.work-form__input(name='work-form-prof', placeholder='Founder of LoftSchool', required='')
              .work-form__row
                label.work-form__block
                  .work-form__block-title.text Review
                  textarea.work-form__textarea.review__textarea(name="text", cols="10", rows="6", placeholder='Each of our Detail Experts have a background in car care that spans far beyond just your basic car care needs. Each member of our team is an avid enthusiast of all cars and trucks, attending regional events and shows, where we enter our own vehicles...' )
                
              .work-form__btns
                button.button-ellipse.button-ellipse_bg-trsp Decline
                button.button-ellipse Save
</template>

<script>
export default {
  name: 'Reviews'
  };
</script>

<style lang="pcss">
.reviews {
  background-color:#f7f9fe;
}
.review-edit {
  padding-bottom: 50px;
  margin-bottom: 30px;
}
.review-edit__body {
  display: flex;
  align-items: flex-start; 
  justify-content: left;
}
.review-edit__person {
  width: 19%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-right: 30px; */
  margin-right: 3%;
}
.review-edit__photo {
  margin-bottom: 25px;
  background-color: #dee4ed;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.review-edit__icon {
  background: url('../../images/content/man-user.png');
  min-width: 43%;
  height: 57%;
  background-repeat: no-repeat;
}
.review-edit__text {
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 2.12;
  letter-spacing: normal;
  text-align: left;
  color: #383bcf;
}
/* .work-form_review {
  display: flex;
  flex-direction: row;
} */
.work-form__row {
  display: flex;
}
.review-edit__form {
  width: 57%;
}
.work-form__block_review {
  flex: 1;
  margin-right: 3%;
}
.work-form__block_review:last-child {
  margin-right: 0;
}


.review__textarea {
  margin-bottom: 29px;
}
</style>

