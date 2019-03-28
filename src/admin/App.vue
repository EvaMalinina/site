<template lang="pug">
  //- main-header
  .wrapper-inner
    .header
      .container.header__container
        .header-left
          .user
            .user__photo
              img.user__pic
            .user__name Tetiana Dotsenko
          .header-left__title Administration Panel
        .header-right
          button.header-right__btn Log out
    .header-nav
      .container
        ul.nav
          li.nav__item About me
          li.nav__item Works
          li.nav__item Reviews
    .content
      .container
        .block-info
          .block-info__name Block «About me»
          .block-info__modify
            button.circle-btn 
            a.block-info__add Add group
        .blocks
          .block-new new
          .block-workflow work
          .block-frontend front
          
    
</template>

<style lang="pcss">
  body {
    margin: 0;
    padding: 0;
    font-family: OpenSans;
    font-size: 14px;
    font-weight: normal;
  }
  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
    border: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  .wrapper-inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 80px 77px 1fr;
    grid-template-areas: 
      "header"
      "header-nav"
      "content"
  }
  .header {
    display: grid;
    grid-area: header;
    height: 80px;
    background-image: linear-gradient(to right, #3e3e59, #454573);
  }
  .container {
    margin: 0 auto;
    width: 90%;
  }
  .header__container {
    display: grid;
    grid-template: 
     "left right" 1fr
     / 1fr 1fr;
  }
  .header-left {
    display: grid;
    grid-area: left;
    grid-template: 1fr/ 1fr 1fr;
    align-items: center;
  }
  .header-right {
    display: grid;
    grid-area: right;
    align-items: center;
    justify-content: end;
  }
  .user {
    display: flex;
    align-items: center;
  }
  .user__photo {
    width: 43.9px;
    height: 43.9px;
    margin-right: 23px;
    border-radius: 50%;
    overflow: hidden;

  }
  .user__pic {
    background-image: url('../images/content/14.jpg');
    background-size: contain;
    width: 100%;
    height: 100%;
  }
  .user__name {
    font-size: 18px;
    line-height: 1.89;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }
  .header-left__title {
    opacity: 0.5;
    font-size: 14px;
    font-weight: normal;
    line-height: 2.43;
    letter-spacing: normal;
    text-align: left;
    color: rgba(255, 255, 255, 0.5);
  }
  .header-right__btn {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    text-decoration: underline;
    color: rgba(255, 255, 255, 0.7);
    background-color: transparent;
  }
  
  .header-nav {
    grid-area: header-nav;
    background-color: white;
  }
  .nav {
    display: flex;
    text-decoration: none;
    list-style: none;
  }
  .nav__item {
    width: 8.75%;
    padding: 26px 0;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: normal;
    text-align: center;
    color: #414c63;
  }
  .nav__item:hover {
    color: #383bcf;
    border-bottom: solid 3px #383bcf;
    transition: 0.7s;
  }
  .content {
    display: grid;
    grid-area: content;
    background-color:#f7f9fe;
  }
  .block-info {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template: 135px
    / repeat(5, 1fr);
  }
  .block-info__name {
    font-size: 21px;
    font-weight: bold;
    line-height: 1.62;
    letter-spacing: normal;
    text-align: left;
    color: #414c63;
  }
  .block-info__modify {
    display: flex;
    align-items: center;
  }
  .block-info__add {
    font-size: 16px;
    font-weight: 400;
    line-height: 2.12;
    letter-spacing: normal;
    text-align: left;
    color: #383bcf;
    margin-left: 14px;
  }
  .circle-btn {
    width: 21px;
    height: 21px;
    background-image: linear-gradient(to right, #006aed, #3f35cb);
    border-radius: 50%;
    position: relative;
  }
  .circle-btn::after {
    content: "+";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    font-size: 15px;
    color: #ffffff;
  }
  
  .blocks {
    display: grid;
    grid-template: 387px 387px 
    /525px 525px;
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
  .block-new {
    /* display: grid; */
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
  .block-workflow {
    /* display: grid; */
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
  .block-frontend {
    /* display: grid; */
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
  
</style>

// <script>
// import MainHeader from './components/Header.vue'

// export default {
//   data() {
//     return {
//       text: // Переменная, которую мы объявляем в шаблоне
//         "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//     }
//   },
//   methods: {
// 		handleClick(e) {
// 			console.log(this.text);
// 		}
// 	}
// }
// </script>
