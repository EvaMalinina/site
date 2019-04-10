<template lang="pug">
  .content-workadd
    .container
      .workadd
        .workadd__new
          button.button__workadd(
            @click="showBlankEdit"
          ) +
          .workadd__text Add work
        //- BlankEdit(
        //-   v-if="showBlankEdit"
        //- )
        BlankReady(
          v-if="false"
        )
        Blank(
          v-for="(item, index) in items",
          :key="item.id",
          :item="item"
        )

</template>

<script>

export default {
  name: 'WorkAdd',
  props: {
    handleShowBlankEdit: Function,
    items: Array
  },
  data () {
    return {
      // showBlankEdit: false,
    }
  },
  components: {
    Blank: () => import("../ui/Blank.vue"),
    BlankEdit: () => import("../ui/BlankEdit.vue"),
    BlankReady: () => import("../ui/BlankReady.vue"),
  },
  methods: {
    showBlankEdit() {
      console.log('show');
      this.$emit('handleShowBlankEdit');
    }
  }
};
</script>

<style lang="pcss">
.content-workadd {
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
