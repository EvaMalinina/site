<template lang="pug">    
  diV.workadd__list
    .workadd__item(v-for="(item, index) in items")
      .workadd__exmpl(
        v-if="item.pic"
        :style="{ backgroundImage: `url(${require(`../../images/content/${item.pic}`)})` }"
      ) 
      .container
        .workadd__exmpl-name {{ item.title }} 
        .workadd__exmpl-text.text {{ item.text }} 
        a.workadd__link(href="#") {{ item.link }}
        .workadd__btns
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
  name: 'Plank',
  data () {
    return {
      items:[
             {
               pic: '1.jpg',
               title: 'School website',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
               link: 'http://loftschool.ru'
             },
             {
               pic: '2.jpg',
               title: 'Music website',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
               link: 'http://loftschool.ru'
             },
             {
               pic: '3.jpg',
               title: 'Beauty salon website',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
               link: 'http://loftschool.ru'
             },
             {
               pic: '4.jpg',
               title: 'Auto website',
               text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
               link: 'http://loftschool.ru'
             }
           ]
    }
  }
};
</script>

<style lang="pcss">
  @import "./plank.pcss";
</style>