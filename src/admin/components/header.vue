<template lang="pug">
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
</template>

<script>
export default {
  name: 'MainHeader'
};
</script>

<style lang="pcss">
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
  background-image: url('../../images/content/14.jpg');
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
</style>