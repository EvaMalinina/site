<template lang="pug">
  .content-reviewadd
    .container
      .reviewadd
        .workadd__new
          button.button__workadd +
          .workadd__text Add review
        .reviewadd__item(v-for="(item, index) in items")
          .reviewadd__head
            .reviewadd__pic
              .reviewadd__photo(
                v-if="item.pic"
                :style="{ backgroundImage: `url(${require(`../../images/content/${item.pic}`)})` }"
              ) 
            .reviewadd__person-info
              .reviewadd__name {{ item.name }} 
              .reviewadd__title {{ item.title }} 
          .reviewadd__body
            .workadd__exmpl-text.text {{ item.text }} 
            .workadd__btns.workadd__btns_reviews
              .workadd__btn 
                .workadd__btn-correct Correct
                .block__pencil
                  button.button__pencil 
              .workadd__btn
                .workadd__btn-correct Remove
                .block__cross
                  button.button__cross  
</template>

<script>
export default {
  name: 'ReviewAdd',
  data () {
    return {
      items:[
             {
               pic: 'vladimir-sabantsev.jpg',
               name: 'Vladymyr Sabantsev',
               title: 'Teacher',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
             },
             {
               pic: 'dmitryi-kovalchuk.jpg',
               name: 'Dmitryi Kovalchuk',
               title: 'Founder of LoftSchool',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
             },
             {
               pic: 'vladimir-sabantsev.jpg',
               name: 'Vladymyr Sabantsev',
               title: 'Teacher',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
             },
             {
               pic: 'dmitryi-kovalchuk.jpg',
               name: 'Dmitryi Kovalchuk',
               title: 'Founder of LoftSchool',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
             }
           ]
    }
  }
  };
</script>

<style lang="pcss">
  .content-reviewadd {
    grid-area: content-reviewadd;
    background-color:#f7f9fe;
  }
  .reviewadd {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: 380px 380px;
  grid-gap: 3%; 
}
.reviewadd__item {
  padding: 20px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}
.reviewadd__head {
  display: flex;
  align-items: center;
  border-bottom: solid 1px #dedee0;
  padding-bottom: 25px;
  margin-bottom: 20px;
}
.reviewadd__pic {
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
.reviewadd__photo {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.reviewadd__person-info {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.reviewadd__name {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
 }
 .reviewadd__title {
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: rgba(65, 76, 99, 0.5);
 }
 .workadd__btns_reviews {
   align-self: flex-end;
   margin-bottom: 30px;
 }
</style>
