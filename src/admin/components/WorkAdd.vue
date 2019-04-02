<template lang="pug">
  .content-workadd
    .container
      .workadd
        .workadd__new
          button.button__workadd +
          .workadd__text Add work
        Plank
        //- .workadd__item(v-for="(item, index) in items")
        //-   .workadd__exmpl(
        //-        v-if="item.pic"
        //-        :style="{ backgroundImage: `url(${require(`../../images/content/${item.pic}`)})` }"
        //-    ) 
        //-   .container
        //-     .workadd__exmpl-name {{ item.title }} 
        //-     .workadd__exmpl-text.text {{ item.text }} 
        //-     a.workadd__link(href="#") {{ item.link }}
        //-     .workadd__btns
        //-       .workadd__btn 
        //-         .workadd__btn-correct Correct
        //-         .block__pencil
        //-           button.button__pencil 
        //-       .workadd__btn
        //-         .workadd__btn-correct Remove
        //-         .block__cross
        //-           button.button__cross  
        
</template>

<script>
import Plank from '../ui/Plank.vue'

export default {
  name: 'WorkAdd',
  // data () {
  //   return {
  //     items:[
  //            {
  //              pic: '1.jpg',
  //              title: 'School website',
  //              text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
  //              link: 'http://loftschool.ru'
  //            },
  //            {
  //              pic: '2.jpg',
  //              title: 'Music website',
  //              text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
  //              link: 'http://loftschool.ru'
  //            },
  //            {
  //              pic: '3.jpg',
  //              title: 'Beauty salon website',
  //              text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
  //              link: 'http://loftschool.ru'
  //            },
  //            {
  //              pic: '4.jpg',
  //              title: 'Auto website',
  //              text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
  //              link: 'http://loftschool.ru'
  //            }
  //          ]
  //   }
  // },
  components: {
    Plank
  }
};
</script>

<style lang="pcss">
.content-workadd {
  grid-area: content-workadd;
  background-color:#f7f9fe;
}
.workadd {
  display: grid;
  grid-template-columns: 32% 32% 32%;
  grid-template-rows: 556px 556px;
  grid-gap: 3%; 

}
.workadd__new {
  background-image: linear-gradient(to right, #006aed, #3f35cb);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.button__workadd {
  font-size: 72px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.42;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  padding: 57px;
  border-radius: 50%;
  border: solid 2px white;
  background: transparent;
  margin-bottom: 30px;
}
.workadd__text {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
 }
 /* .workadd__item {
   display: flex;
   flex-direction: column;
   background-color: white;
 }
 .workadd__exmpl {
  height: 190px;
  width: 100%;
  background-size: cover;
  margin-bottom: 40px;
 }
 .workadd__exmpl-name {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #414c63;
  margin-bottom: 25px;
 }
 .workadd__exmpl-text {
   margin-bottom: 30px;
   color: #414c63;
 }
 .workadd__link {
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: #383bcf;
  margin-bottom: 45px;
  display: flex;
 }
 .workadd__btns {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 40px;
   align-self: flex-end;
 }
 .workadd__btn {
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.88;
  letter-spacing: normal;
  text-align: left;
  color: rgba(65, 76, 99, 0.5);
  background: transparent;
  margin-right: 10px;
  display: flex;
 }
 .workadd__btn-correct {
   margin-right: 10px;
 } */
</style>
