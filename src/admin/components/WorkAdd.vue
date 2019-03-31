<template lang="pug">
  .content-workadd
    .container
      .workadd
        .workadd__new
          button.button__workadd +
          .workadd__text Add work
        // -
        //   var items = [
        //     {
        //       pic: '1.jpg',
        //       title: 'School website',
        //       text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
        //       link: 'http://loftschool.ru'
        //     },
        //     {
        //       pic: '2.jpg',
        //       title: 'Music website',
        //       text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
        //       link: 'http://loftschool.ru'
        //     },
        //     {
        //       pic: '3.jpg',
        //       title: 'Beauty salon website',
        //       text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
        //       link: 'http://loftschool.ru'
        //     },
        //     {
        //       pic: '4.jpg',
        //       title: 'Auto website',
        //       text: 'This girl was not learning web development somewhere, but at LoftSchool! 4.5 months only the most difficult trials and sleepless nights!',
        //       link: 'http://loftschool.ru'
        //     }
        //   ];
        // ul.workadd__list
          each item in items
            li.workadd__item
              .workadd__exmpl(:style="{ backgroundImage:` url(${require(`../../images/${item.pic}`)})` }")
              .workadd__exmpl-name= item.title
              .workadd__exmpl-text= item.text
              a.workadd__link(href="#")= item.link
              .workadd__btns
                .workadd__btn-correct
                  button.button__correct Correct
                  img.workadd__img
                .workadd__btn-delete
                  button.button__delete Remove
                  img.workadd__img

</template>

<script>
export default {
  name: 'WorkAdd'
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
</style>
