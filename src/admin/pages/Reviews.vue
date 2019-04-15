<template lang='pug'>
  div.reviews
    ReviewEdit
    ReviewAdd
</template>

<script>

export default {
  name: 'Reviews',
  data () {
    return {

    }
  },
  computed: {},
  methods: {},
  components: {
    ReviewEdit: () => import("../components/ReviewEdit.vue"),
    ReviewAdd: () => import("../components/ReviewAdd.vue"),
  }
}
</script>


<style lang='pcss'>
.reviews {
  grid-area: content;
  display: flex;
  flex-direction: column;
}
</style>